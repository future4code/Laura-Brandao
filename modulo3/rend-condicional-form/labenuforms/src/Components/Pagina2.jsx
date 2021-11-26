import React from "react"


export default class Pagina2 extends React.Component {
    render () {
        return ( 
            <div>
                <h1>Etapa 2 - Informações do Ensino Superior</h1>
                <ol>
                    <li>Qual curso?</li>
                    <input type="text"/>
                    <li>Qual sua unidade de ensino?</li>
                    <input type="text"/>
                </ol>
            </div>
            
            )
       
    }
}