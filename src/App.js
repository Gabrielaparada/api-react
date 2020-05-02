import React , { Component } from 'react';
import axios from 'axios'
import Form from './Form'
import './App.css';
import Jerks from './Jerks'


//api call to hp API 
//through our component did mount
//save in state
//get user selection from a drop down list of wizard groups

//filter list of wizards down to just selected group of wizards
//filter those wizards down to the spies, save list to state 
//print list to the page using a .map()

class App extends Component {
  constructor() {
    super();
    this.state = {
      allzards: [],
      spies: [],
    };
  }

  componentDidMount() {
    axios({
      url: `https://www.potterapi.com/v1/characters`,
      method: `GET`,
      responseType: `json`,
      params: {
        key: `$2a$10$QTTp9tiCR8CNBsj3iA5IR.jJhfdT2FKcAnZsP2gYYGaI27KsGEVwy`,
      },
    }).then((response) => {
      // console.log(response.data);
      this.setState({
        allzards: response.data
      })
    });
  }

  //function to get user choice from our form.js component
  //Use name of t wizard to find members of that group in  our allzards array using a filter
  //use that new list to filter again and find the shitty spies 
  getChoice = (e, cauldronName) => {
    e.preventDefault()
    console.log(cauldronName)
    const copyOfAllzards = [...this.state.allzards]

    const cauldron = copyOfAllzards.filter((wizard)=>{
      return wizard[cauldronName] === true;
    })
    const spies = cauldron.filter((spy)=> {
      return spy.deathEater === true;

    })
      this.setState({
        spies: spies
      });
  }

  render() {
    return (
      <div className="App">
        <h1>This sucks</h1>
        <Form getChoice={this.getChoice}/>
        <Jerks spies={this.state.spies}/>
      </div>
    );
  }
}

export default App;
