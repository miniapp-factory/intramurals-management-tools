'use client';
import { useState, useEffect } from "react";

interface Match {
  teamA: string;
  teamB: string;
  scoreA: number;
  scoreB: number;
}

export default function Leaderboard() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [standings, setStandings] = useState<Record<string, number>>({});

  useEffect(() => {
    // Simple ranking: points = 3 for win, 1 for draw, 0 for loss
    const points: Record<string, number> = {};
    matches.forEach((m) => {
      const { teamA, teamB, scoreA, scoreB } = m;
      points[teamA] = (points[teamA] ?? 0) + (scoreA > scoreB ? 3 : scoreA === scoreB ? 1 : 0);
      points[teamB] = (points[teamB] ?? 0) + (scoreB > scoreA ? 3 : scoreA === scoreB ? 1 : 0);
    });
    setStandings(points);
  }, [matches]);

  return (
    <div className="w-full max-w-md space-y-4">
      <h2 className="text-xl font-semibold text-red-600">Leaderboard</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b py-2">Team</th>
            <th className="border-b py-2">Points</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(standings)
            .sort((a, b) => b[1] - a[1])
            .map(([team, points]) => (
              <tr key={team}>
                <td className="border-b py-2">{team}</td>
                <td className="border-b py-2">{points}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
