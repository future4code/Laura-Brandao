import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const MainCardContainer = styled.div`
  width: 30%;
  border: 1px solid black;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: white;
`;

const Container = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  border-radius: 15px;

`;

const Line = styled.hr`
  border: none;
  height: 1px;
  color: #adb5bd;
  background-color: #adb5bd;
`;


const Image = styled.img`
  width: 100%;
  
`;

const MainCard = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lanna/person"
      )
      .then((res) => {
        setProfile(res.data.profile);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <MainCardContainer>
      <Header />
      <Line />
      <Container>
        <Image src={profile.photo} />
        <div>
          <p>
            {profile.name}, {profile.age}
          </p>
          <p>{profile.bio}</p>
        </div>
      </Container>
      <Footer />
    </MainCardContainer>
  );
};

export default MainCard;
