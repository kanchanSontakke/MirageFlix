import { useEffect, useState } from "react";
import { Text } from "@mantine/core";
import ShowRow from "../shared/ShowRow";
import ShowCard from "../shared/ShowCard";
import { tmdbConfig } from "../../config/tmdb";

type Show = {
  id: number;
  title: string;
  posterUrl: string | null;
  backdropUrl: string | null;
  year?: number;
};

type Props = {
  query?: string;
};

export default function SlowShowRow({ query = "" }: Props) {
  const [allShows, setAllShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const start = performance.now();
    console.log("[API] Fetch started");
    fetch(
      `${tmdbConfig.baseUrl}/trending/movie/week?api_key=${tmdbConfig.apiKey}`,
    )
      .then((res) => res.json())
      .then((data) => {
        const end = performance.now();
        console.log(`[API] Fetch completed in ${(end - start).toFixed(2)}ms`);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const mapped: Show[] = data.results.map((m: any) => ({
          id: m.id,
          title: m.title,
          posterUrl: m.poster_path
            ? `${tmdbConfig.imageBaseUrl}${m.poster_path}`
            : null,
          year: m.release_date
            ? new Date(m.release_date).getFullYear()
            : undefined,
        }));

        setAllShows(mapped);
        setLoading(false);
      });
  }, []);

  console.log("[SLOW] Filtering shows for query:", query);
  // Still inefficient: filter on every render
  const filteredShows = allShows.filter((show) =>
    show.title.toLowerCase().includes(query.toLowerCase()),
  );

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
          posterUrl={show.posterUrl ?? undefined}
        />
      ))}
    </ShowRow>
  );
}
