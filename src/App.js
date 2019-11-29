import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input'
import Section2 from './components/Section2';
import Section3 from './components/Section3';


const generateUrl = (name) => `https://restcountries.eu/rest/v2/name/${name}`

const input = document.querySelector("input");

class App extends React.Component {
  state = {
    text: '',
    info: [],
    cardPosition: null
  }

  onInputChange = (event) => {
    this.setState({ text: event.target.value })

  }



  handleClick = () => {
    this.fetchData();
    //usunac classe active z pozostalych
    var tab = document.querySelectorAll(".land");

    tab.forEach((el) => {
      el.classList.remove("active");
    })
    //podmienic

    //ustawic duza litere

    //dodac klase active

    const zmienna = document.querySelector((`[title="${this.state.text}"]`));
    this.setState(
      {
        cardPosition: zmienna.getBoundingClientRect()
      }
    )
    console.log( zmienna.getBoundingClientRect())

    document.querySelector((`[title="${this.state.text}"]`)).classList.add("active")
  }



  fetchData = () => {
    const URL_ADRESS = generateUrl(this.state.text);

    fetch(URL_ADRESS)
      .then(data => data.json())
      .then(info => { console.log(info); this.setState({ info }) })
      .catch(error => console.log("Error"));
  }

  render() {
    return (
      <div className="App">
        <Input handleClick={this.handleClick} text={this.state.text} onInputChange={this.onInputChange} />
        <Section2 />
        {this.state.info.length > 0 && <Section3 cardPosition={this.state.cardPosition} info={this.state.info[0]} />}
      </div>
    );
  }

}

export default App;


//ostylowac input 