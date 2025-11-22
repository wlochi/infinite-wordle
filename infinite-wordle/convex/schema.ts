import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    words: defineTable({
        word: v.string(),
        randNum: v.number(),
    }).index('by_randNum', ['randNum']),
});