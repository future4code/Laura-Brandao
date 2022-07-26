import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToCardPage } from "../Routes/Coordinator";
import { Grid, Flex, Button } from "@chakra-ui/react";
import Cards from "../Components/Cards";
import tarotJson from "../Assets/tarot.json";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

export default function HomePage() {
  const navigate = useNavigate();
  const [deck, setDeck] = useState(newDeck);
  const [gameStarted, setGameStarted] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  function startGame() {
    setDeck(shuffleCards());
    setGameStarted(true);
  }

  function showCardInfo(name) {
    if (gameStarted === true) {
      setDeck(flipCard(name));
      setTimeout(() => {
        goToCardPage(navigate, name);
      }, 1000);
      setGameStarted(false);
    }
  }

  const renderedCards = deck.map((card) => {
    return (
      <Cards
        key={card.name}
        imageUrl={card.isShowing ? card.frontCard : card.backCard}
        title={card.name}
        onClick={() => showCardInfo(card.name)}
      ></Cards>
    );
  });

  return (
    <div>
      <Flex
        w="100%"
        align={"center"}
        justify={"center"}
        bg={"rgba(0, 0, 0, 0.24)"}
        p={"10px"}
        pos="fixed"
        zIndex={2}
        boxShadow={"dark-lg"}
      >
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody fontSize="17px">
              O baralho foi embaralhado! Clique em uma carta para ler a
              interpretação.
            </ModalBody>

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
          fontSize="30px"
          onClick={() => onOpen(startGame())}
        >
          Iniciar jogo
        </Button>
      </Flex>

      <Flex pt="100px" align={"center"} justify={"center"}>
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
