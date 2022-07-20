import { VStack, Image } from "@chakra-ui/react";
import * as React from "react";

export default function BackCards(property) {
  return (
    <VStack spacing={1} borderWidth="1px" borderColor="black" borderRadius="lg">
      <Image
        borderTopRadius="lg"
        w="100%"
        h="40vh"
        src={property.imageBackCard}
        alt={property.imageAlt}
      />
    </VStack>
  );
}
