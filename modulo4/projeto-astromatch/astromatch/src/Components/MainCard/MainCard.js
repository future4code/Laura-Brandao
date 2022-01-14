import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const MainCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  border: 1px solid black;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: white;
  margin-bottom: 20px;
`;

const Container = styled.div`
  margin: 20px;
`;

const ContainerButton = styled.div`
  margin: 20px;
  justify-content: space-around;
  display: flex;
`;

const Image = styled.img`
  width: 350px;
  height: 300px;
  border-radius: 10px;
`;

const TextContainer = styled.div`
  text-align: center;
`;

const MainCard = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/laura-lanna-joy/person"
      )
      .then((res) => {
        setProfile(res.data.profile);
      })
      .catch((error) => {});
  };

  const choosePerson =  (choice) => {
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
        console.log(res);
        loadProfile();
      })
      .catch((err) => {
        console.log(err);
        loadProfile();
      });
  };

  return (
    <MainCardContainer>
      <Container>
        <Image src={profile.photo} />
        <TextContainer>
          <p>
            {profile.name}, {profile.age}
          </p>
          <p>{profile.bio}</p>
        </TextContainer>
      </Container>
      <ContainerButton>
        <button onClick={() => choosePerson(true)}>Like</button>
        <button onClick={() => choosePerson(false)}> Dislike</button>
      </ContainerButton>
    </MainCardContainer>
  );
};

export default MainCard;
