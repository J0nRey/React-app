import React, { Component } from 'react';


import './App.css';

class App extends Component{
    constructor(){
        super();
        this.state = {
            etapa:''
        };
        this.setEtapa = this.setEtapa.bind( this );
    }

    setEtapa( event ) {
        const value = event.target.value;
        console.log( value );
        this.setState({etapa: value});
    }

    render(){
        const { etapa } = this.state;
        return(

            <>
                <input className="control" type="radio" name="etapa" value="siga" onClick={ this.setEtapa }/>
                <label htmlFor="">Siga</label>
                <input className="control" type="radio" name="etapa" value="precaucion" onClick={ this.setEtapa }/>
                <label htmlFor="">Precaución</label>
                <input className="control" type="radio" name="etapa" value="alto" onClick={ this.setEtapa }/>
                <label htmlFor="">Alto</label>
      
                <div className="semaforo">
                    <p>{ this.state.etapa }</p>
                    <div className={`luz ${etapa}`}></div>   
                </div>
            </>
      
        );
    }

}


export default App;
