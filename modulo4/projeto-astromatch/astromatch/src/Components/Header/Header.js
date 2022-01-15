import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../img/logo-astromatch.png";
import Button from "@material/icon-button";

const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  height: 50px;
  border: 1px solid black;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-color: white;
  margin-top: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;`;

const LogoImg = styled.img`
  width: 30%;
  height: 100%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  margin-right: 150px;
  margin-left: 150px;
`;
const StyledButton = styled.button`
  margin-right: 5px;
  margin-left: 5px;
`;

const Header = (props) => {
  return (
    <ContainerHeader>
      {!props.getIsMainCard() ? (
        <StyledButton
          onClick={() => props.changePage("mainCard")}
          class="mdc-button mdc-button--raised mdc-button--leading"
        >
          <i class="material-icons mdc-button__icon" aria-hidden="true">
            arrow_back
          </i>
        </StyledButton>
      ) : null}
      <LogoImg src={Logo} />
      {props.getIsMainCard() ? (
        <StyledButton
          onClick={() => props.changePage("listCard")}
          class="mdc-button mdc-button--raised mdc-button--leading"
        >
          <i class="material-icons mdc-button__icon" aria-hidden="true">
            group
          </i>
        </StyledButton>
      ) : null}
    </ContainerHeader>
  );
};
export default Header;
