import { z } from "zod"
import { email } from "zod/v4";
// have to define strict schema for email 
// Backend: SignupSchema

export const SignupSchema = z.object({

    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters")
});
export const SigninSchema = z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export const SparkCreateSchema = z.object({
    availableTriggerId: z.string(),
    triggerMetadata: z.any().optional(),
    actions: z.array(z.object({
        availableactionId: z.string(),
        actionMetadata: z.any().optional()
    }))
});                                                                                                              