import React from "react";
import styled from "styled-components";

const SmallCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 80px;
    
    img{
        width: 30px;
        margin-right: 10px;
    }

    h4{
        margin-right: 5px;
    }

    div{
        display: flex;
        flex-direction: row;
        justify-items: flex-start;
    }
`

function CardPequeno (props){
    return(
        <SmallCardContainer>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </SmallCardContainer>
    )
}

export default CardPequeno