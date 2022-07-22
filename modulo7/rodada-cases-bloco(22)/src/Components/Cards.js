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
      _hover={{ bg: "#FEEBC8" }}
      _active={{
        bg: "#dddfe2",
        transform: "scale(0.98)",
        borderColor: "#bec3c9",
      }}
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
    >
      <Image
        src={property.imageUrl}
        alt={property.title}
        onClick={property.onClick}
        maxW={"100%"}
        maxH={"100%"}
        pt={"4px"}
        pb={"4px"}
      />
      {/* <Box p="1" maxW={"100%"} maxH={"20%"}>
        <Box
          fontWeight="bold"
          fontSize={"xs"}
          lineHeight="tight"
          marginBottom={"2px"}
          noOfLines={[1, 2, 3]}
          isTruncated
        >
          {property.title}
        </Box>
        <Box display="flex" justifyContent={"center"} fontSize={"xs"} noOfLines={[1, 2, 3]}>
          {property.content}
        </Box>
      </Box> */}
    </Box>
  );
}
