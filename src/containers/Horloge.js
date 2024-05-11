import React, {Component} from 'react';


class Horloge extends Component {
    state = {
        date : new Date(),
        compteur : 1
   }
   tick = () => {
        this.setState ((oldState, props) => {
            return{
                date:new Date(),
                compteur : oldState.compteur + 1
            }

        });
         
   }

   componentDidMount(){
    this.timerID= setInterval(() => this.tick(), 1000);
}


componentWillUnmount(){
    clearInterval(this.timerID);
}

    render(){
        return (
            <>
                <h2 className='text-center text-primary' style = {{fontFamily:'Sigmar One'}} >{this.state.date.toLocaleTimeString()}</h2>
                <div className='text-center text-primary' style = {{fontFamily:'Sigmar One'}} > Compteur : {this.state.compteur}</div>

            </>
            
        );
    }
}

export default Horloge;