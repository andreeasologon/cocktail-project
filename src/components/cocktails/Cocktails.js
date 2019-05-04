import React from 'react';
import Cocktail from '../cocktail/Cocktail';
import './Cocktails.scss';
import TileDetails from '../title-details/TitleDetails';

export default class Cocktails extends React.Component {

  // state = [{
  //   isBack: false
  // }];


  getTitleDetails = (params) => {
    return params.map(item => {
      this.setState({
        idDrink: item.idDrink,
        title: item.title,
        imgUrl: item.imgUrl,
        isBack:false
      })
    })
  }

  refreshCocktails = (params) => {
    this.setState({ isBack: params })
  }
  render() {
    let cocktailTiles = null;
    let description = null;
    if (this.props.cocktails !== "") {
      cocktailTiles = this.props.cocktails.drinks.map(item => {
        return <Cocktail key={item.idDrink} title={item.strDrink} imgUrl={item.strDrinkThumb} idDrink={item.idDrink} getDetails={this.getTitleDetails} />
      });
    }

    if (this.state !== null && this.state.isBack === false) {
      description = <TileDetails key={this.state.idDrink} title={this.state.title} imgUrl={this.state.imgUrl} id={this.state.idDrink} toCocktails={this.refreshCocktails} />
    }

    return (
      <div>
        <h4>{this.props.category}</h4>
        <div className="tiles-container">
          {this.state === null ? cocktailTiles : description}
          {this.state !== null && this.state.isBack ? cocktailTiles: ''}
        </div>
      </div >
    );
  }
}
