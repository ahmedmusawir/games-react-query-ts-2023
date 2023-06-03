import {
  baseTheme,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

function SearchInput({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Box w={"100%"}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current) onSearch(ref.current.value);
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            borderColor={"gray.500"}
            borderRadius={20}
            placeholder="Search games..."
            variant={"filled"}
            ref={ref}
          />
        </InputGroup>
      </form>
    </Box>
  );
}

export default SearchInput;
