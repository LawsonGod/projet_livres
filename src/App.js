import React, { Component } from 'react';
import TitreH1 from "./components/Titres/TitreH1";
import Button from "./components/Buttons/Button";
import Livres from './containers/Livres/Livres';
import Horloge from './containers/Horloge';


class App extends Component {
  state = {
    ajoutLivre : false
  }

  handleAjouterLivre = () => {
       this.setState((oldState, props) =>{
        return {ajoutLivre: !oldState.ajoutLivre}
       })
    }
  
  render(){
    return (
      <div className='container'>
        < Horloge />
        <TitreH1>page listant les livres</TitreH1>
        <Livres ajoutLivre={this.state.ajoutLivre} fermerAjoutLivre={() => this.setState({ajoutLivre:false})}/>
        <Button typeBtn="btn-success" 
          css= "w-100" 
          clic={this.handleAjouterLivre}>
          {!this.state.ajoutLivre? "Ajouter" : "Fermer l'ajout"}
        </Button>
      </div>
     
    );
  } 
}

export default App;
