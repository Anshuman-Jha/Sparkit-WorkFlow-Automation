import { z } from "zod";
export declare const SignupSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    password: string;
}, {
    name: string;
    email: string;
    password: string;
}>;
export declare const SigninSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const SparkCreateSchema: z.ZodObject<{
    availableTriggerId: z.ZodString;
    triggerMetadata: z.ZodOptional<z.ZodAny>;
    actions: z.ZodArray<z.ZodObject<{
        availableactionId: z.ZodString;
        actionMetadata: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        availableactionId: string;
        actionMetadata?: any;
    }, {
        availableactionId: string;
        actionMetadata?: any;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    availableTriggerId: string;
    actions: {
        availableactionId: string;
        actionMetadata?: any;
    }[];
    triggerMetadata?: any;
}, {
    availableTriggerId: string;
    actions: {
        availableactionId: string;
        actionMetadata?: any;
    }[];
    triggerMetadata?: any;
}>;
