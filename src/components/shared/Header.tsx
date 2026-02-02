import { Text, Container, Group, SegmentedControl } from "@mantine/core";
import Logo from "../../assets/Logo.svg";
import type { PerformanceMode } from "../../config/performance";

type HeaderProps = {
  mode: PerformanceMode;
  onModeChange: (mode: PerformanceMode) => void;
};

export default function AppHeader({ mode, onModeChange }: HeaderProps) {
  return (
    <Container size="xl">
      <Group h={64} display="flex" justify="space-between" align="center">
        <Text fw={700} size="xl" c="violet.4" aria-label="MirageFlix logo">
          <img src={Logo} alt="MirageFlix Logo" className="w-36" />
          {/* <nav aria-label="Primary navigation" className="hidden md:block">
            <Group gap="sm" wrap="nowrap">
              <NavLink label="Home" c="dark.0" />
              <NavLink label="Explore" c="dark.0" />
              <NavLink
                label="My List"
                c="dark.0"
                style={{ whiteSpace: "pre" }}
              />
            </Group>
          </nav> */}
        </Text>

        <Group gap="xs">
          <Text size="sm" c="dimmed">
            Mode
          </Text>

          <SegmentedControl
            size="xs"
            value={mode}
            data={[
              { label: "Slow", value: "slow" },
              { label: "Optimized", value: "optimized" },
            ]}
            onChange={(value) => onModeChange(value as PerformanceMode)}
          />
        </Group>
      </Group>
    </Container>
  );
}
