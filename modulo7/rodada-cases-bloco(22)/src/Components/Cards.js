import { Box, Center, Image, Container } from "@chakra-ui/react";
import * as React from "react";

export default function Cards(property) {
  return (
    <Box maxW="50vw" maxH="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        w="100%"
        objectFit="cover"
        src={property.imageUrl}
        alt={property.imageAlt}
      />

      <Box p="2">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {property.title}
        </Box>

        <Box>
          <Container maxW="100%" maxH="100%" centerContent>
            <Box padding="1" color="black" maxW="sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
