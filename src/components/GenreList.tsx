import useGenres from "../hooks/useGenres";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { getCroppedImageUrl } from "../services/imageUrl";
import useGameQueryStore from "../store";

function GenreList() {
  const { data: genres, error, isLoading } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  // console.log("Genres:", genres);
  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <>
      <Heading as={"h5"} fontSize="x-large" marginBottom={1} marginTop={5}>
        Genres
      </Heading>
      <List>
        {genres?.results?.map((genre) => (
          <ListItem key={genre.id} paddingY={5}>
            <HStack>
              <Image
                boxSize={"42px"}
                borderRadius={8}
                objectFit={"cover"}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize={"lg"}
                colorScheme={genre.id === selectedGenreId ? "facebook" : "gray"}
                whiteSpace={"normal"}
                textAlign="left"
              >
                {genre.name}
                {/* <p>
                {genre.name && genre.name.length > 10
                  ? genre.name.slice(0, 10) + "..."
                  : genre.name}
              </p> */}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
