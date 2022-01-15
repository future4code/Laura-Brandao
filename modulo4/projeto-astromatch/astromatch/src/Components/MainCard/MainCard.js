import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import loadImage from "../../img/Heart-1s-200px.gif";
import likeButton from "../../img/like button.png";

const MainCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  height: 600px;
  border: 1px solid black;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: white;
  margin-bottom: 5px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const ContainerButton = styled.div`
  margin-top: 10px;
  width: 500px;
  justify-content: space-around;
  display: flex;
`;

const Image = styled.img`
  align-items: center;
  height: 400px;
  width: 400px;
  border-radius: 10px;
  box-shadow: rgb(117 117 117 / 77%) 0px 4px 10px 0px;
`;
const ImageLoad = styled.img`
  height: 50px;
`;

const LikeButton = styled.img`
  height: 30px;
`;
const LikeButtonContainer = styled.button`
  background-color: black;
  color: white;
  font-size: 10px;
  padding: 10px 40px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }
`;

const TextContainer = styled.div`
  text-align: center;
  text-shadow: 0.1em 0.1em 0.2em black;
  position: relative;
  font-family: cursive;
  width: 400px;
  font-size: 12px;
`;

const MainCard = () => {
  const [profile, setProfile] = useState({});
  const [load, setLoad] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = () => {
    setLoad(true);
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/laura-lanna-joy/person"
      )
      .then((res) => {
        setProfile(res.data.profile);
        setLoad(false);
      })
      .catch((error) => {});
  };

  const choosePerson = (choice) => {
    const body = {
      id: `${profile.id}`,
      choice: choice,
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/laura-lanna-joy/choose-person",
        body
      )
      .then((res) => {
        loadProfile();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MainCardContainer>
      {load ? (
        <ImageLoad src={loadImage} />
      ) : (
        <Container>
          <Image src={profile.photo} />
          <TextContainer>
            <p>
              {profile.name}, {profile.age}
            </p>
            <p>{profile.bio}</p>
          </TextContainer>
          <ContainerButton>
            <LikeButtonContainer onClick={() => choosePerson(true)}>Like</LikeButtonContainer>
            <LikeButtonContainer onClick={() => choosePerson(false)}> Dislike</LikeButtonContainer>
          </ContainerButton>
        </Container>
      )}
    </MainCardContainer>
  );
};

export default MainCard;
