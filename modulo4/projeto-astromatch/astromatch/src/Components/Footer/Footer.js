import React from "react";
import styled from "styled-components";
import Like from "../../img/heart.png";
import Dislike from "../../img/remove.png";

const ContainerFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin:auto;
  width: 100%;
  background-color: white;
  padding-bottom: 10px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;

`;

const Icon = styled.img`
  width: 10%;
  height: 10%;
`;

const Footer = () => {
  return (
    <ContainerFooter>
      <Icon src={Dislike} />
      <Icon src={Like} />
    </ContainerFooter>
  );
};
export default Footer;
