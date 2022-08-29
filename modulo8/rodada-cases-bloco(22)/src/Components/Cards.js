import { Box, Image } from "@chakra-ui/react";
import * as React from "react";

export default function Cards(property) {
  return (
    <Box
      maxW="200px"
      maxH="300px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      borderColor="black"
      boxShadow="dark-lg"
      bg="white"
      _hover={{ bg: "#E2E8F0" }}
      _active={{
        bg: "#dddfe2",
        transform: "scale(0.98)",
        borderColor: "#bec3c9",
      }}
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
    >
      <Image
        key={property.title}
        src={property.imageUrl}
        alt={property.title}
        onClick={property.onClick}
        maxW={"100%"}
        maxH={"100%"}
        pt={"4px"}
        pb={"4px"}
      />
    </Box>
  );
}
