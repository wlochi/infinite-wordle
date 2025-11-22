import { query } from "./_generated/server";

export const getWord = query({
    args: {},
    handler: async (ctx) => {
        const randNum = Math.random();
        let word = await ctx.db.query("words")
            .withIndex('by_randNum', (q) => q.gte('randNum', randNum))
            .first();

        if (!word) {
            word = await ctx.db.query("words")
                .withIndex('by_randNum', (q) => q.gte("randNum", 0))
                .first();
        }
        return word;
    },
});

