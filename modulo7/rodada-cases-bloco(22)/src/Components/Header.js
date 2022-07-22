import { React } from "react";
import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import background from "../Assets/background.jpg"

export default function Header() {
  return (
    <Flex
      w={"100%"}
      bg={"#161b25"}
      borderBottonColor={"#000000"}
      boxShadow={"outline"}
      h={["125px"]}
      justify={"space-around"}
      align={"center"}
      backgroundImage={background}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      
    >
      <Flex justify={"space-around"} align={"center"} color={"#FEEBC8"}>
          <Heading p={4} as='h1' size='4xl'>
           Tarot
          </Heading>
          <Text p={4} fontSize="md" >
            Para todos os seus problemas, o tarot tem a solução. Clique no botão para iniciar o jogo.
          </Text>
          <Button size="lg" colorScheme="blue" fontSize="13px">
            Iniciar jogo
          </Button>
      </Flex>
    </Flex>
  );
}
