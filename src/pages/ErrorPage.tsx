import { Box, Card, CardBody, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  console.log({ error });

  return (
    <>
      <NavBar />
      <Box padding={10}>
        <Card variant={"filled"}>
          <CardBody>
            <Heading fontSize={"6xl"}>Oops...</Heading>
            <Text>
              {isRouteErrorResponse(error)
                ? error.error?.message
                : "Unexpected error"}
            </Text>
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default ErrorPage;
