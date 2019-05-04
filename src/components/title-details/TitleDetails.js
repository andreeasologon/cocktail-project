import React from 'react';
import './TileDetails.scss';
export default class TileDetails extends React.Component {

    goBack = () => {
  
       this.props.toCocktails(true);
    }
    render() {
        return (
            <div className="tile-details">
                <p>{this.props.id}</p>
                <p>{this.props.title}</p>
                <img src= {this.props.imgUrl} alt={this.props.title} height="42" width="42"></img>

                <button className="button-search" onClick ={this.goBack}>Go back</button>
            </div>
        
        );
    }
}
