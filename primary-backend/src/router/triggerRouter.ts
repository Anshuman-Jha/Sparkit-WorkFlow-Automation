import { Router } from "express";
import { prismaClient } from "../db/index.js";

const router = Router();

// get the available tirgger 
router.get("/available", async (req, res) => {
    // give me all the triggrrs present in availableTrigger db
    const availableTriggers = await prismaClient.availableTriggers.findMany({});

    return res.json({
        availableTriggers: availableTriggers
    })
});


export const triggerRouter = router;