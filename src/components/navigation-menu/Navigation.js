import React from 'react';
import './Navigation.scss';

export default class Navigation extends React.Component {

  render() {
    let navItems = null;
    navItems = this.props.navigationItems.map(item => {
      return <li key={item.id}>{item.name}</li>
    })
    return (
      <ul className="nav-container">
        {navItems}
      </ul>
    );
  }
}
