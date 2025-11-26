import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./types/config.js";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    // expect user to send tkens in authorization in header => jwt token
    // forcefully token  type converted to string
    const token = req.headers.authorization as unknown as string;

    try { // if payload exists => correctly verify

        const payload = jwt.verify(token, JWT_PASSWORD);
        // @ts-ignore
        req.id = payload.id;
        next();
    } catch (e) { // if jwt is not verified => verification fails

        return res.status(403).json({
            message: "You are not logged in !!!!"
        })
    }



};