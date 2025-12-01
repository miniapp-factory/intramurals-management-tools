'use client';
import { useState } from "react";

import { Match } from "@/components/leaderboard";

export default function ScoreInput({ setMatches }: { setMatches: (m: Match) => void }) {
  const [teamA, setTeamA] = useState("");
  const [teamB, setTeamB] = useState("");
  const [scoreA, setScoreA] = useState("");
  const [scoreB, setScoreB] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const match: Match = {
      teamA,
      teamB,
      scoreA: Number(scoreA),
      scoreB: Number(scoreB),
    };
    setMatches(match);
    // Reset form
    setTeamA("");
    setTeamB("");
    setScoreA("");
    setScoreB("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <h2 className="text-xl font-semibold text-red-600">Enter Match Score</h2>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Team A"
          value={teamA}
          onChange={(e) => setTeamA(e.target.value)}
          className="rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          required
        />
        <input
          type="text"
          placeholder="Team B"
          value={teamB}
          onChange={(e) => setTeamB(e.target.value)}
          className="rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="number"
          placeholder="Score A"
          value={scoreA}
          onChange={(e) => setScoreA(e.target.value)}
          className="rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          required
        />
        <input
          type="number"
          placeholder="Score B"
          value={scoreB}
          onChange={(e) => setScoreB(e.target.value)}
          className="rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
      >
        Submit
      </button>
    </form>
  );
}
