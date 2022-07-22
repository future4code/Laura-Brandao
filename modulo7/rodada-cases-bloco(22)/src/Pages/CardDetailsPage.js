import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

export default function CardDetailsPage() {
  return (
    <Grid
      templateAreas={`"header header"
                  "main main"
                  "footer footer"`}
      gridTemplateRows={"100px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      h="100vh"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="orange.300" area={"header"}>
        Card Header
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        Card Main
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Card Footer
      </GridItem>
    </Grid>
  );
}
