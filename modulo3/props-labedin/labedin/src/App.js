import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Foto from './components/img/foto-laura.jpg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Foto} 
          nome="Laura Lanna Brandão" 
          descricao="Sou aluna do curso de Web Full Stack, período noturno, da Labenu. Faço parte da turma Joy!"
        />
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        
        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/747/747314.png"
          nome="Email:"
          descricao="lauralannabrandao@yahoo.com.br"
        />

        <CardPequeno
          imagem="data:image/png;base64,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"
          nome="Endereço:"
          descricao="Rua da Bahia, 302, Centro, Belo Horizonte, MG."
        />
        

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="data:image/png;base64,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" 
          nome="Studio Sol" 
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices ornare justo nec condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed in lacus velit. " 
        />
        
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHNapXy96Mg_WpBEpL4KgVWSirRh_gTOju2WP1tPW2wgrJTIkqx0ZCZy-vtAkkt3sETuo&usqp=CAU" 
          nome="Hotmart" 
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices ornare justo nec condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed in lacus velit. " 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
