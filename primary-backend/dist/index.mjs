import express from "express";
import { userRouter } from "./router/userRouter.js";
import { sparkRouter } from "./router/sparkRouter.js";
import cors from "cors";
import { triggerRouter } from "./router/triggerRouter.js";
import { actionRouter } from "./router/actionRouter.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/spark", sparkRouter);
app.use("/api/v1/trigger", triggerRouter);
app.use("/api/v1/action", actionRouter);
app.get("/", async (req, res) => {
    return res.json({
        message: "Spark_it Backend is Online !"
    });
});
const port = 3001;
app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
//# sourceMappingURL=index.js.map