'use client';
import { useState } from "react";
import type { Match } from "@/components/leaderboard";
import HomeClient from "@/components/home-client";
import { description, title } from "@/lib/metadata";

export default function HomeClient() {
  const [matches, setMatches] = useState<Match[]>([]);
  return (
    <main className="flex flex-col gap-6 place-items-center place-content-center px-4 grow">
      <h1 className="text-3xl font-bold text-red-600">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
      <EventForm onSaveEvent={(event) => console.log(event)} />
      <ScoreInput setMatches={(match) => setMatches(prev => [...prev, match])} />
      <Leaderboard matches={matches} />
    </main>
  );
}
