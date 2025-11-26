import { Router } from "express";
import { authMiddleware } from "../authMiddleware.js";
import { SignupSchema, SigninSchema } from "../types/index.js";
import { prismaClient } from "../db/index.js";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "../types/config.js";
import bcrypt from "bcryptjs";
const router = Router();
// first check if user already exists 
router.post("/signup", async (req, res) => {
    const body = req.body;
    const parseData = SignupSchema.safeParse(body);
    if (!parseData.success) {
        return res.status(411).json({
            message: "Incorrrect Inputs !!!!"
        });
    }
    const userExists = await prismaClient.user.findFirst({
        where: {
            email: parseData.data?.email
        }
    });
    // if user already exists => no need of signup
    if (userExists) {
        return res.status(409).json({
            message: "User already Exists !!!"
        });
    }
    const hashPassword = await bcrypt.hash(parseData.data.password, 10);
    await prismaClient.user.create({
        data: {
            email: parseData.data.email,
            password: hashPassword,
            name: parseData.data.name
        }
    });
    return res.json({
        nessage: "Please Verify your Account !!!"
    });
});
router.post("/signin", async (req, res) => {
    const body = req.body;
    const parseData = SigninSchema.safeParse(body);
    // if zod  schema did not matched 
    if (!parseData.success) {
        return res.status(411).json({
            message: "Inavlid Input"
        });
    }
    // check if user already signed up i.e must already exists 
    const user = await prismaClient.user.findFirst({
        where: {
            email: parseData.data.email,
        }
    });
    // if user does not exist in db
    if (!user) {
        return res.status(411).json({
            message: "You need to Signup First !!!"
        });
    }
    ;
    const isMatch = await bcrypt.compare(user.password, parseData.data.password);
    if (!isMatch) {
        return res.status(401).json({
            message: "Invalid Credentials !!!"
        });
    }
    ;
    // sign the jwt so that they don't neeed to login again & again
    const token = jwt.sign({
        id: user.id
    }, JWT_PASSWORD);
    res.json({
        token: token
    });
});
// how user get the details provided he is authenticated 
router.get("/", authMiddleware, async (req, res) => {
    // @ts-ignore // todo: fix the type
    const id = req.id;
    // user want to get/fetch the details if auth is passed 
    const user = await prismaClient.user.findFirst({
        where: {
            id: parseInt(id)
        },
        select: {
            name: true,
            email: true
        }
    });
    return res.json({
        user
    });
});
export const userRouter = router;
//# sourceMappingURL=userRouter.js.map