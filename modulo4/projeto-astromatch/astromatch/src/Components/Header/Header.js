import React from "react";
import styled from "styled-components";
import Logo from "../../img/logo-astromatch.png";
import Go from "../../img/login(1).png"
import Back from "../../img/login.png"

const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
`

const LogoImg = styled.img`
    width: 40% ;
    height: 40% ;
`
const Icon = styled.img`
    width: 8% ;
    height: 8% ;
`


const Header = () => {
    return (
        <ContainerHeader>
            <Icon src={Back}/>
            <LogoImg src={Logo} />
            <Icon src={Go}/>
        </ContainerHeader>
    )
}
export default Header