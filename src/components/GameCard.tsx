import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  Image,
} from "@chakra-ui/react";
import { Game } from "../constants";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";
import { getCroppedImageUrl } from "../services/imageUrl";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card variant={"filled"}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>

        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
      <Flex padding={3}>
        <Emoji rating={game.rating_top} />
      </Flex>
    </Card>
  );
}

export default GameCard;
