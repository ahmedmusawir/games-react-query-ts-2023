import { Button, Text } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summery = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summery}
      <Button
        marginLeft={5}
        fontWeight={"bold"}
        borderColor={"gray.200"}
        border="1px"
        size="sm"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
