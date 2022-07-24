import React, { Component } from 'react';
import './App.css';
import CustomHeading from './Components/CustomHeading';
import CustomList from './Components/CustomList';

class App extends Component{
    constructor(){
        super();
        this.state={
            title:"Hola Usuario !!!",
            listItems:[]
        }
        this.changeHandler = this.changeHandler.bind( this )
        this.saveHandler = this.saveHandler.bind( this )
    }

changeHandler( event ){
    const text = event.target.value
    this.setState({title: text})
}

saveHandler(){
    this.setState({ listItems: [...this.state.listItems, this.state.title] })
}

    render(){

        return(

            <>
                <input type="text" onChange={this.changeHandler}/>
                <button onClick={this.saveHandler}>Guardar</button>
               {/*<CustomHeading 
               text= {this.state.title ? this.state.title : "Hola Usuario !!!" }
               customClasses = {
                ["text-bold", "text-red"]
            }
               />*/}
                <CustomList 
                listItems = { this.state.listItems}
                />
            </>
      
        );
    }

}


export default App;
