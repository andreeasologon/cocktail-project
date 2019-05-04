import React from 'react';
import './Cocktail.scss';
export default class Cocktail extends React.Component {

  handleClick = () => {
   
    var data = [{
      idDrink: this.props.idDrink,
      title: this.props.title,
      imgUrl: this.props.imgUrl
    }]
    this.props.getDetails(data);
  }

  render() {
    return (
      <div className="tile-container">
        <p onClick={this.handleClick}>{this.props.idDrink}</p>
          <img src= {this.props.imgUrl} alt={this.props.title} height="42" width="42"></img>
      </div>
    );
  }
}
