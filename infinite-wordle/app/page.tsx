"use client";

import Image from "next/image";
import {useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";

export default function Home() {
    const words = useQuery(api.words.get);
    console.log(words);
  return (
    <main className="flex min-h-screen flex-col p-24">
        {words?.map(({ _id, word }) => <div key={_id}>{word}</div>)}
    </main>
  );
}
