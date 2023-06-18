import useTrailers from "../hooks/useTrailers";
import { Text } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailers, error, isLoading } = useTrailers(gameId);
  //   console.log({ trailers });
  if (isLoading) return null;

  if (error) throw error;

  const first = trailers?.results[0];
  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : (
    <Text color={"red.300"}>No Video Trailer Found ...</Text>
  );
};

export default GameTrailer;
