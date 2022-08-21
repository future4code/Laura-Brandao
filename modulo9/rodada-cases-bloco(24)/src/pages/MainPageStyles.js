import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background: #efefef;
  display: grid;
  grid-template-columns: 27.3% 72.7%;
  grid-template-rows: 100%;
  @media screen and (max-device-width: 667px) {
    display: flex;
    flex-direction: column;
  }
`;
export const LeftSection = styled.div`
  grid-column: 1/2;
  background-image: url(${(props) => props.color});
  left: 0%;
  top: 0%;
  bottom: 0%;
  border: none;
  color: white;
  font-family: "Montserrat", sans-serif;
  display: grid;
  grid-template-columns: 5% 80% 15%;
  grid-template-rows: 1fr 1fr 1fr;
  @media screen and (max-device-width: 667px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Header = styled.div`
  margin: 20% 5%;
  grid-column: 2/3;
  grid-row: 1/2;
  @media screen and (max-device-width: 667px) {
    display: flex;
    justify-content: center;
    margin-top: 15%;
    grid: none;
  }
`;

export const SelectLottery = styled.select`
  border-radius: 10px;
  width: 215, 91px;
  height: 45, 2px;
  padding: 0.5rem;
  width: 12rem;
`;
export const MiddleContainer = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  margin-top: 5rem;
  margin-left: 1rem;
  font-size: 1.5rem;
  display: flex;
  flex-direction: row;
  @media screen and (max-device-width: 667px) {
    flex-direction: column;
    justify-content: center;
    margin-top: -2rem;
    margin-left: 0;
    align-items: center;
  }
`;
export const GameName = styled.div`
  margin-left: 2rem;
  margin-top: 0.6rem;
  font-size: 0.83em;
  font-weight: bold;
  @media screen and (max-device-width: 667px) {
    margin: 1rem;
  }
`;
export const InfoContainer = styled.div`
  grid-column: 2/3;
  grid-row: 3/4;
  margin-left: 1rem;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  @media screen and (max-device-width: 667px) {
    margin: 0;
    flex-direction: row;
    margin: 2rem;
  }
`;
export const RightSection = styled.div`
  grid-column: 2/3;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  height: 100%;
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-template-rows: 1fr 1fr 1fr;
  @media screen and (max-device-width: 667px) {
    display: flex;
    flex-direction: column;
    bottom: 0;
  }
`;
export const Text = styled.div`
  grid-column: 1/4;
  grid-row: 3/4;
  text-align: center;
  margin-top: 6rem;
  @media screen and (max-device-width: 667px) {
    display: flex;
    flex-direction: column;
    margin: auto 1rem;
    bottom: 0;
  }
`;
export const Game = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-left: 2rem;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-device-width: 667px) {
    margin-top: 2rem;
    padding: 1rem;
  }
`;
export const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 100%;
  background: #ffffff;
  width: 5rem;
  height: 5rem;
  margin: 0.6rem;
  padding: 0.2rem;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media screen and (max-device-width: 667px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;
