import React, {Component} from 'react';
import Buttons from '../../../components/Buttons/Button';

class FormulaireAjout extends Component {
    state = {
        titreSaisi: "",
        auteurSaisi: "",
        nombreDePageSaisi: ""
    }
    handleValidationForm = (event) => {
        event.preventDefault();
        this.props.validation( this.state.titreSaisi, this.state.auteurSaisi, this.state.nombreDePageSaisi )
    }

    render(){
        return (
            <>
                <h2 className='text-center text-primary' style = {{fontFamily:'Sigmar One'}}>Affichage du formulaire d'ajout</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="titre" className="form-label">Titre du livre</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="titre" 
                            value={this.state.titreSaisi}
                            onChange={(event) => this.setState({titreSaisi:event.target.value})}  
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="auteur" className="form-label">Auteur</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="auteur" 
                            value={this.state.auteurSaisi}
                            onChange={(event) => this.setState({auteurSaisi:event.target.value})}  
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="nombreDePage" className="form-label">Nombre de pages</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="nombreDePage"
                            value={this.state.nombreDePageSaisi}
                            onChange={(event) => this.setState({nombreDePageSaisi:event.target.value})}
                        />
                    </div>
                    <Buttons typeBtn="btn-primary" clic={this.handleValidationForm}>Valider</Buttons>
                </form>
            </>
        );
    }
}

export default FormulaireAjout;