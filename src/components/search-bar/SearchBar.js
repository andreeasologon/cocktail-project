import React from 'react';
import './SearchBar.scss';
export default class SearchBar extends React.Component {
    render() {
        return (
            <div className="search-bar-container">
                <input className="input-container" type="text" />
                <button className="button-search" type="button">Search here</button>
            </div>
        );
    }
}
