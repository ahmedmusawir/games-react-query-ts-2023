import { SimpleGrid, Image, List } from "@chakra-ui/react";
import React from "react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data: screenshots, isLoading, error } = useScreenshots(gameId);
  // console.log({ screenshots });
  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} marginY={5} gap="3">
      {screenshots?.results.map((img) => (
        <Image key={img.id} src={img.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
