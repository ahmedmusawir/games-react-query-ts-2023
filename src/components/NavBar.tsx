import { HStack, Image, Text } from "@chakra-ui/react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  // const navigate = useNavigate();

  return (
    <HStack
      justifyContent={"space-between"}
      padding="20px"
      // bgColor={"gray.300"}
    >
      <NavLink to="/">
        <Image src={logo} boxSize={"60px"} objectFit="cover" />
      </NavLink>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
