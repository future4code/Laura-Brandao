import React, { useState } from "react";
import { Box, Flex, Button, Image, Text, Heading } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { goHome } from "../Routes/Coordinator";
import tarotJson from "../Assets/tarot.json";
import interpretation from "../Assets/interpretation.json";

export default function CardDetailsPage() {
  const navigate = useNavigate();
  const { name } = useParams();

  const [card, setCard] = useState(newDeck);
  const [cardDescription, setCardDescription] = useState(renderInterpretation);

  function newDeck() {
    const result = tarotJson.cards.find((item) => item.name === `${name}`);
    return result;
  }

  function renderInterpretation() {
    const result = interpretation.cards.find((item) => item.name === `${name}`);
    return result;
  }

  return (
      <Flex
        h={"100%"}
        flexDirection={"column"}
        align={"center"}
        justify={"center"}
        pt={"10px"}
        pb={"10px"}

      >
        <Heading>{card.name}</Heading>
        <Image
          key={card.name}
          src={tarotJson.imagesUrl + card.image}
          alt={card.name}
          maxW={"100%"}
          h={"100%"}
          pt={"10px"}
          pb={"10px"}
        />
        <Box
          bg="rgba(0, 0, 0, 0.24)"
          maxW={"100%"}
          maxH={"100%"}
          p={4}
          m="50px"
          color="black"
          borderRadius={"15px"}
          boxShadow={"dark-lg"}
        >
          <Heading as="h4" size="md" align={"center"} pb={"10px"}>
            Interpretação
          </Heading>
          <Text as="cite" textAlign={"center"}>
            {cardDescription.interpretation}
          </Text>
        </Box>
        <Button
          colorScheme="blue"
          fontSize="20px"
          onClick={() => goHome(navigate)}
          size="lg"
        >
          Voltar
        </Button>
      </Flex>
  );
}
