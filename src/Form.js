import React, { Component } from 'react';

//component to get user input 
//logical flow 
  //user is going to select from a drop down of wizards groups (technical name: cauldron)
  //User submits the form. The button press passes the user selection back up to app.js by calling a function passed down through props

  //what we will need up in this motherfucker 
  // a form with a drop down select and a submit button
  //state
  //function from props 


class Form extends Component {
  constructor() {
    super();
    this.state = {
      userChoice: "",
    };
  }

  getFormSelection = (event) => {
    const choice = event.target.value
    this.setState({
      userChoice: choice
    });
  };
  
  // waitForIt = (e) => {
  //   this.props.getChoice(e, this.state.userChoice);
  // }


  render() {
    // console.log(this.props);
    return (
      <form action="">
        <select onChange={this.getFormSelection} value={this.state.userChoice} name="whichCauldron" id="">
          <option value="">PICK ONE FFS</option>
          <option value="ministryOfMagic">Ministry of Magic</option>
          <option value="orderOfThePhoenix"> Order of the Phoenix</option>
          <option value="dumbledoresArmy">Dumbledores Army</option>
        </select>

        <button onClick={ (e) => { this.props.getChoice(e, this.state.userChoice) }} type="submit">
          Submit!
        </button>
      </form>
    );
  }
}
export default Form;