import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  return (
    <Badge fontSize={"14px"} paddingX={3}>
      {score}
    </Badge>
  );
}

export default CriticScore;
