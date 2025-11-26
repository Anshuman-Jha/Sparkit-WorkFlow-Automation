import { Router } from "express";
import { authMiddleware } from "../authMiddleware.js";
import { SparkCreateSchema } from "../types/index.js";
import { prismaClient } from "../db/index.js";
const router = Router();
//let's  create a fresh spark
router.post("/", authMiddleware, async (req, res) => {
    // @ts-ignore
    const id = req.id;
    const body = req.body;
    const parseData = SparkCreateSchema.safeParse(body);
    if (!parseData.success) {
        return res.status(411).json({
            message: "Invalid Inputs !!!"
        });
    }
    const sparkId = await prismaClient.$transaction(async (tx) => {
        const spark = await tx.spark.create({
            data: {
                userId: parseInt(id),
                triggerId: "",
                actions: {
                    create: parseData.data?.actions.map((x, index) => ({
                        actionId: x.availableactionId,
                        sortingOrder: index
                    }))
                }
            }
        });
        const trigger = await tx.trigger.create({
            data: {
                triggerId: parseData.data?.availableTriggerId,
                sparkId: spark.id
            }
        });
        await tx.spark.update({
            where: {
                id: spark.id
            },
            data: {
                triggerId: trigger.id
            }
        });
        return spark.id;
    });
    return res.json({
        sparkId
    });
});
// 
router.get("/", authMiddleware, async (req, res) => {
    // @ts-ignore
    const id = req.id;
    const spark = await prismaClient.spark.findMany({
        where: {
            userId: id
        },
        include: {
            actions: {
                include: {
                    type: true
                }
            },
            trigger: {
                include: {
                    type: true
                }
            }
        }
    });
    console.log("spark installed");
    return res.json({
        spark
    });
});
// it will get a spark of specific id   
router.get("/:sparkId", authMiddleware, async (req, res) => {
    // @ts-ignore
    const id = req.id;
    const sparkId = req.params.sparkId;
    const sparks = await prismaClient.spark.findFirst({
        where: {
            id: sparkId,
            userId: id // only returns zap id only that belongs to this user i.e id(req.id)
        },
        include: {
            actions: {
                include: {
                    type: true
                }
            },
            trigger: {
                include: {
                    type: true
                }
            }
        }
    });
    console.log("spark handler");
    return res.json({
        sparks
    });
});
export const sparkRouter = router;
//# sourceMappingURL=sparkRouter.js.map