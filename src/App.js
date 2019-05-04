import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import { Header, Navigation, SearchBar, Cocktails } from './components/index';

class App extends Component {
  state = {
    nav: [{
      id: 'Alcoholic',
      name: 'Alcoholic'
    },
    {
      id: 'Non_Alcoholic',
      name: 'Non-alcoholic'
    },
    {
      id: 'Ordinary_Drink',
      name: 'Ordinary drink'
    },
    {
      id: 'Cocktail_glass',
      name: 'Cocktail glass'
    },
    {
      id: "Champagne_flute",
      name: 'Champagne flute'
    }],

    cocktails: '',
    category: '',
    details: false
  }
  componentDidMount() {

    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
      .then(response => this.setState({
        cocktails: response.data,
        category: 'Alcoholic'
      })
      );

    // axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
    //   .then(response => this.setState({
    //     cocktails: response.data,
    //     category:'Ordinary drink'
    //   })
    //   );
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation navigationItems={this.state.nav} />
        <SearchBar />
        <Cocktails category={this.state.category} cocktails={this.state.cocktails} />
      </div>
    );
  }
}

export default App;
