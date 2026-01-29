import { Card, Text, Stack } from "@mantine/core";

type Props = {
  title: string;
  year?: number | string;
  posterUrl?: string;
};

export default function ShowCard({ title, year, posterUrl }: Props) {
  return (
    <div className="transition-transform duration-200 hover:scale-[1.05]">
      <Card component="article" padding={0} className="min-w-[150px] bg-dark-8">
        {/* Poster container (LOCKED) */}
        <div className="relative h-48 w-full overflow-hidden rounded-[6px]">
          {posterUrl ? (
            <>
              <img
                src={posterUrl}
                alt={`${title} poster`}
                className="h-full w-full object-cover"
                loading="lazy"
              />

              {/* Brightness normalization */}
              <div className="absolute inset-0 bg-black/20" />

              {/* Bottom anchoring gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </>
          ) : (
            <div className="h-full w-full bg-dark-7" />
          )}
        </div>

        {/* Metadata */}
        <Stack gap={4} mt="sm" px="xs" pb="xs">
          <Text size="sm" fw={500} c="violet.4" lineClamp={1}>
            {title}
          </Text>

          {year && (
            <Text size="xs" c="dark.2">
              {year}
            </Text>
          )}
        </Stack>
      </Card>
    </div>
  );
}
