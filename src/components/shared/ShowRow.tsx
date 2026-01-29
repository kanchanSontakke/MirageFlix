import { Group } from "@mantine/core";
import type { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
export default function ShowRow({ children }: Props) {
  return (
    /* OUTER: handles scrolling */
    <div className="overflow-x-auto overflow-y-visible -mx-2 px-2">
      {/* INNER: holds cards, allows hover escape */}
      <Group
        gap="md"
        wrap="nowrap"
        role="list"
        aria-label="Show list"
        className="overflow-visible pb-6 m-2"
      >
        {children}
      </Group>
    </div>
  );
}
