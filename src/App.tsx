import { Profiler } from "react";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Profiler
      id="MirageFlix-App"
      onRender={(id, phase, actualDuration, baseDuration) => {
        console.log(
          `[PROFILER] ${id} | ${phase} | actual: ${actualDuration.toFixed(
            2,
          )}ms | base: ${baseDuration.toFixed(2)}ms`,
        );
      }}
    >
      <HomePage />
    </Profiler>
  );
}
