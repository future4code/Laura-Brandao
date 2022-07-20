import React from "react";
import { Center, Grid, GridItem, Button } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import Cards from "../Components/Cards";
import tarotJson from "../Assets/tarot.json";

export default function HomePage() {
  
  const renderedCards = tarotJson.cards.map((card) => {
    return (
      <Cards
        imageUrl={
          "https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/" +
          card.image
        }
        title={card.name}
        content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      ></Cards>
    );
  });

  return (
    <Grid
      templateAreas={`"header header"
                  "main main"
                  "footer footer"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      h="100%"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="orange.300" area={"header"}>
        <Center>
          <Heading>Tarot do dia</Heading>
        </Center>
      </GridItem>
      <GridItem pl="2" pr="2" bg="green.300" area={"main"}>
        <Center p="2">
          <Button colorScheme="teal" variant="outline">
            Shuffle
          </Button>
        </Center>
        <Grid templateColumns="repeat(6, 1fr)" gap={1}>
          {renderedCards}
        </Grid>
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Home Footer
      </GridItem>
    </Grid>
  );
}
