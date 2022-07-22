import { Container, Center } from "@chakra-ui/react";
import { CircularProgress } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Container w={"100vw"} h={"100vh"}>
      <Center>
        <CircularProgress isIndeterminate color="green.300" />
      </Center>
    </Container>
  );
}
