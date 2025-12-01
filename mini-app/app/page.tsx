import { description, title } from "@/lib/metadata";
import { generateMetadata } from "@/lib/farcaster-embed";
import EventForm from "@/components/event-form";
import { useState } from "react";
import type { Match } from "@/components/leaderboard";
import ScoreInput from "@/components/score-input";
import Leaderboard from "@/components/leaderboard";

export { generateMetadata };

export default function Home() {
  const [matches, setMatches] = useState<Match[]>([]);
  // NEVER write anything here, only use this page to import components
  return (
    <main className="flex flex-col gap-6 place-items-center place-content-center px-4 grow">
      <h1 className="text-3xl font-bold text-red-600">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
      <EventForm />
      <ScoreInput setMatches={setMatches} />
      <Leaderboard matches={matches} />
    </main>
  );
}
