import { useEffect, useState } from "react";

import { Text } from "@mantine/core";

import ShowRow from "../shared/ShowRow";

import ShowCard from "../shared/ShowCard";

import { tmdbConfig } from "../../config/tmdb";

type Show = {
  id: number;
  title: string;
  posterUrl: string | undefined;
  backdropUrl: string | undefined;
  year?: number;
};

type Props = {
  query?: string;
};

export default function SlowShowRow({ query = "" }: Props) {
  console.count("SlowShowRow render");

  const [allShows, setAllShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState(true);

  // ❌ Fetch inside component (baseline)

  useEffect(() => {
    fetch(
      `${tmdbConfig.baseUrl}/trending/movie/week?api_key=${tmdbConfig.apiKey}`,
    )
      .then((res) => res.json())

      .then((data) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const mapped: Show[] = data.results.map((m: any) => ({
          id: m.id,
          title: m.title,
          posterUrl: m.poster_path
            ? `${tmdbConfig.imageBaseUrl}${m.poster_path}`
            : undefined,
          backdropUrl: m.backdrop_path
            ? `https://image.tmdb.org/t/p/original${m.backdrop_path}`
            : undefined,
          year: m.release_date
            ? new Date(m.release_date).getFullYear()
            : undefined,
        }));

        // 😈 Artificial data explosion

        const inflated = Array.from({ length: 10 }).flatMap((_, index) =>
          mapped.map((item) => ({
            ...item,
            id: item.id * 100 + index,
          })),
        );

        setAllShows(inflated);
        setLoading(false);
      });
  }, []);

  // ❌ Expensive filter on EVERY render / keystroke

  const filteredShows = allShows.filter((show) => {
    const title = show.title.toLowerCase();
    const q = query.toLowerCase();

    // 😈 Fake expensive CPU work

    for (let i = 0; i < 5000; i++) { /* empty */ }
    return title.includes(q);
  });

  if (loading) {
    return <Text c="dark.2">Loading…</Text>;
  }

  return (
    <ShowRow>
      {filteredShows.map((show) => (
        <ShowCard
          key={show.id}
          title={show.title}
          year={show.year}
          posterUrl={show.posterUrl}
        />
      ))}
    </ShowRow>
  );
}
