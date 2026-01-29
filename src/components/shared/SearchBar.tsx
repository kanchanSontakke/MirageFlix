import { Flex, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

type Props = {
  value: string;

  onChange: (value: string) => void;
};


export default function SearchBar({ value, onChange }: Props) {
  return (
    <Flex
      className="
       rounded-2xl
       p-[1px]
       bg-gradient-to-r
       from-violet-500/40
       via-violet-500/20
       to-transparent
       hover:from-violet-500/60"
    >
      <TextInput
        aria-label="Search movies or shows"
        placeholder="Search for movies or shows..."
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
        leftSection={<IconSearch size={18} />}
        radius="lg"
        size="md"
        w="100%"
        classNames={{
          input:
            "bg-[transparent] text-white placeholder:text-gray-400 border-none focus-visible:ring-2 focus-visible:ring-violet-500/40",
        }}
      />
    </Flex>
  );
}
