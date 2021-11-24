import React from "react"


export default class Pagina1 extends React.Component {
    render () {
        return (
        <div>
            <h1>Etapa 1 - Dados Gerais</h1>
            <ol>
               <li>Qual seu nome?</li>
               <input type="text"/>
               <li>Qual sua idade?</li> 
               <input type="number"/>
               <li>Qual seu email?</li>
               <input type="text"/>
               <li>Qual sua escolaridade?</li>
               <select>
                   <option>Ensino médio incompleto</option>
                   <option>Ensino médio completo</option>
                   <option>Ensino superior incompleto</option>
                   <option>Ensino superior completo</option>
                   <option>Pós-graduação</option>
                   
               </select>
            </ol>
        </div>
        )
    }
}