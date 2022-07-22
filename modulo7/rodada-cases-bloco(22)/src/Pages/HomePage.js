import React, { useState, useEffect } from "react";
import { Grid, Flex, Button } from "@chakra-ui/react";
import Cards from "../Components/Cards";
import tarotJson from "../Assets/tarot.json";
import Header from "../Components/Header";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  isOpen,
  onOpen,
  onClose,
  useDisclosure,
} from "@chakra-ui/react";

export default function HomePage() {
  const [deck, setDeck] = useState(newDeck);
  const [deck1, setDeck1] = useState(tarotJson);

  function newDeck() {
    const array = [];
    tarotJson.cards.forEach((card) => {
      array.push({
        name: card.name,
        frontCard: tarotJson.imagesUrl + card.image,
        backCard: tarotJson.imageBackCard,
        isShowing: true,
      });
    });
    return array;
  }

  function hideCards() {
    let array = [...deck];
    array.forEach((card) => {
      card.isShowing = false;
    });
    return array;
  }

  function showCards() {
    let array = [...deck];
    array.forEach((card) => {
      card.isShowing = true;
    });
    return array;
  }

  function flipCard(name) {
    let array = [...deck];
    const index = array.findIndex((card) => {
      return card.name === name;
    });
    array[index].isShowing = !array[index].isShowing;

    return array;
  }

  function shuffleCards() {
    let array = hideCards();
    let j = 0;
    let temporary;
    for (let i = 0; i < array.length; i++) {
      j = Math.floor(Math.random() * (i + 1));
      temporary = array[i];
      array[i] = array[j];
      array[j] = temporary;
    }
    return array;
  }

  const renderedCards = deck.map((card) => {
    return (
      <Cards
        imageUrl={card.isShowing ? card.frontCard : card.backCard}
        title={card.name}
        onClick={() => setDeck(flipCard(card.name))}
      ></Cards>
    );
  });

  // abrir popup chakra

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Header />
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>O deck foi embaralhado! Clique em uma carta.</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Button
        size="lg"
        colorScheme="blue"
        fontSize="13px"
        onClick={() => onOpen(setDeck(shuffleCards()))}
        
      >
        Iniciar jogo
      </Button>
      <Flex align={"center"} justify={"center"} bg={"rgba(0, 0, 0, 0.16)"}>
        <Grid
          templateColumns={["repeat(4, 1fr)"]}
          gap={2}
          align={"center"}
          m={["13px"]}
        >
          {renderedCards}
        </Grid>
      </Flex>
    </div>
  );
}
