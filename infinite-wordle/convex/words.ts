import { query } from "./_generated/server";
import {v} from "convex/values";

export const get = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("words").collect();
    },
});

export const getWord = query({
    args: {number: v.number()},
    handler: async (ctx) => {
        return (await ctx.db.query("words").filter(q => !q.field("played")).take(1).
        collect()).length;
    },
})