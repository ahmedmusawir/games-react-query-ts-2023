import { ReactNode } from "react";
import { meh, recommended, exceptional } from "../constants";

interface Props {
  rating: number;
}

const emojiMap: { [key: number]: ReactNode } = {
  3: meh,
  4: recommended,
  5: exceptional,
};

function Emoji({ rating }: Props) {
  if (rating < 3) return null;

  return <>{emojiMap[rating]}</>;
}

export default Emoji;
