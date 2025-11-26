import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./types/config.js";
export function authMiddleware(req, res, next) {
    // expect user to send tkens in authorization in header => jwt token
    // forcefully token  type converted to string
    const token = req.headers.authorization;
    try { // if payload exists => correctly verify
        const payload = jwt.verify(token, JWT_PASSWORD);
        // @ts-ignore
        req.id = payload.id;
        next();
    }
    catch (e) { // if jwt is not verified => verification fails
        return res.status(403).json({
            message: "You are not logged in !!!!"
        });
    }
}
;
//# sourceMappingURL=authMiddleware.js.map