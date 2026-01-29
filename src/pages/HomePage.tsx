import { useState } from "react";
import { AppShell, Container, Stack, Title } from "@mantine/core";
import AppHeader from "../components/shared/Header";
import SlowShowRow from "../components/slow/SlowShowRow";
import HeroBanner from "../components/shared/HeroBanner";
import SearchBar from "../components/shared/SearchBar";

export default function HomePage() {
    const [query, setQuery] = useState("");
  return (
    <AppShell header={{ height: 64 }} padding={0}>
      <AppShell.Header className="border-b border-white/5 bg-black/80 backdrop-blur">
        <AppHeader />
      </AppShell.Header>

      <AppShell.Main className="bg-black min-h-screen">
        <Container size="xl">
          <Stack gap="xl" justify="center">
            {/* Search */}
            <section
              aria-labelledby="search-title"
              className="pt-6 items-center"
            >
              <div className="max-w-md m-auto w-full">
                <SearchBar value={query} onChange={setQuery} />
              </div>
            </section>

            {/* Hero */}
            <section aria-labelledby="hero-title">
              <HeroBanner
                title="Anaconda"
                tagline="A group of friends facing mid-life crises head to the rainforest, only to find themselves in a fight for their lives against natural disasters, giant snakes and violent criminals."
                backdropUrl="https://image.tmdb.org/t/p/original/swxhEJsAWms6X1fDZ4HdbvYBSf9.jpg"
              />
            </section>

            {/* Rows */}
            <section aria-labelledby="trending-title">
              <Title id="trending-title" order={2} size="h4">
                Trending Now
              </Title>
              <SlowShowRow query={query} />
            </section>

            <section aria-labelledby="trending-title">
              <Title id="trending-title" order={2} size="h4">
                Popular
              </Title>
              <SlowShowRow />
            </section>

            <section aria-labelledby="trending-title">
              <Title id="trending-title" order={2} size="h4">
                Recommended
              </Title>
              <SlowShowRow />
            </section>
          </Stack>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
