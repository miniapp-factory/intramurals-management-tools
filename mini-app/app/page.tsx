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
  return <HomeClient />;
}
