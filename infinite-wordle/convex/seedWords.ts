import {mutation} from "./_generated/server";
import words from "../words.json";


export const seedWords = mutation({
    args: {},
    handler: async (ctx) => {
        for (const word of words.words) {
            const randNum = Math.random();
            await ctx.db.insert("words", {word, randNum});
        }
    }
});