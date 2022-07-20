import { VStack, Box, Image, Container } from "@chakra-ui/react";
import * as React from "react";

export default function Cards(property) {
  return (
    <VStack
      spacing={1}
      borderWidth="1px"
      borderColor="black"
      borderRadius="lg"
      _hover={{ bg: "#FEEBC8" }}
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      _active={{
        bg: "#dddfe2",
        transform: "scale(0.98)",
        borderColor: "#bec3c9",
      }}
      _focus={{
        boxShadow:
          "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
      }}
    >
      <Image
        borderTopRadius="lg"
        w="100%"
        h="40vh"
        src={property.imageUrl}
        alt={property.title}
      />

      <Box p="2">
        <Box fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
          {property.title}
        </Box>

        <Box>
          <Container centerContent>
            <Box padding="1" color="black">
            {property.content}
            </Box>
          </Container>
        </Box>
      </Box>
    </VStack>
  );
}
