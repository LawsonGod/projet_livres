import React, {Component} from 'react';
import Livre from "./Livre/Livre";
import FormulaireAjout from './FormulaireAjout/FormulaireAjout';


class Livres extends Component {
    state = {
        livres : [
            {id: "1", titre: "1984", auteur: "George Orwell", nombreDePage: "328"},
            {id: "2", titre: "To Kill a Mockingbird", auteur: "Harper Lee", nombreDePage: "281"},
            {id: "3", titre: "Pride and Prejudice", auteur: "Jane Austen", nombreDePage: "279"},
            {id: "4", titre: "The Great Gatsby", auteur: "F. Scott Fitzgerald", nombreDePage: "180"},
            {id: "5", titre: "Moby Dick", auteur: "Herman Melville", nombreDePage: "635"},
            {id: "6", titre: "Ce que tu as fait de moi", auteur: "Karine Giebel", nombreDePage: "528"},
            {id: "7", titre: "Dimanche", auteur: "Georges Simenon", nombreDePage: "200"},
            {id: "8", titre: " Le Chien jaune", auteur: "Georges Simenon", nombreDePage: "150"}

            
        ]

    }
    handleSuppressionLivre = (id) => {
        const livreIndexTab = this.state.livres.findIndex(element => {
                    return element.id === id;
        })

        const newLivres = [...this.state.livres];
        newLivres.splice(livreIndexTab,1);

        this.setState({livres:newLivres});
}


    render(){
        return (
            <>
                <table className='table text-center'>
                    <thead>
                        <tr className='table-dark'>
                            <th>Titre</th>
                            <th>Auteur</th>
                            <th>Nombre de page</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.livres.map(livre => {
                                return(
                                    <tr key={livre.id}>
                                    <Livre 
                                        titre={livre.titre}
                                        auteur={livre.auteur}
                                        nombreDePage={livre.nombreDePage}
                                        suppression = {() => this.handleSuppressionLivre(livre.id)}
                                    />
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>

                {this.props.ajoutLivre && <FormulaireAjout />}

                
            </>
        );
    }
}

export default Livres;