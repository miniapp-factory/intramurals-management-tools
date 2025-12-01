'use client';

import { useState } from "react";
import type { Match } from "@/components/leaderboard";
import { description, title } from "@/lib/metadata";
import EventForm from "@/components/event-form";
import ScoreInput from "@/components/score-input";
import Leaderboard from "@/components/leaderboard";

export default function HomeClient() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [events, setEvents] = useState<
    { name: string; date: string; time: string; location: string }[]
  >([]);
  return (
    <main className="flex flex-col gap-6 place-items-center place-content-center px-4 grow">
      <h1 className="text-3xl font-bold text-red-600">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
      <EventForm onSaveEvent={(event) => setEvents(prev => [...prev, event])} />
      <ScoreInput setMatches={(match) => setMatches(prev => [...prev, match])} />
      <Leaderboard matches={matches} />
      <ul className="mt-4 space-y-1">
        {events.map((e, idx) => (
          <li key={idx} className="text-sm text-gray-700">
            {e.name} – {e.date} at {e.time}, {e.location}
          </li>
        ))}
      </ul>
    </main>
  );
}
