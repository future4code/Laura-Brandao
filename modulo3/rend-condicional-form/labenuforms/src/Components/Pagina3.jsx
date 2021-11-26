import React from "react"


export default class Pagina3 extends React.Component {
    render () {
        return (
        <div>
            <h1>Etapa 3 - Informações Gerais de Ensino</h1>
            <ol>
                <li>Por que você não terminou um curso de graduação?</li>
                <input type="text"/>
                <li>Você fez curso complementar?</li>
                <select>
                    <option>Nenhum</option>
                    <option>Curso técnico</option>
                    <option>Curso de inglês</option>
                </select>
            </ol>
        </div>
        )
    }
}