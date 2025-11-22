"use client";
import {useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";

export default function Home() {
    const word = useQuery(api.words.getWord);
    console.log(word);
  return (
    <main className="flex min-h-screen flex-col p-24">
        <div className="wordle-table">
            <div className="wordle-row">
                <input type="text" minLength={1} maxLength={1} className="word-box"/>
                <input type="text" minLength={1} maxLength={1} className="word-box"/>
                <input type="text" minLength={1} maxLength={1} className="word-box"/>
                <input type="text" minLength={1} maxLength={1} className="word-box"/>
                <input type="text" minLength={1} maxLength={1} className="word-box" />
            </div>
        </div>
    </main>
  );
}
