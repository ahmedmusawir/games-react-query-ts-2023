import {
  baseTheme,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../store";

function SearchInput() {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  const navigate = useNavigate();

  return (
    <Box w={"100%"}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/");
          if (ref.current) {
            setSearchText(ref.current.value);
            ref.current.value = "";
          }
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
