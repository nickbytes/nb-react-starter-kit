/*
  Header
  <Header/>
*/

import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="container px2 mt4">
        <h1 className="caps uppercase h6 blue">{this.props.tagline}</h1>
        <h2 className="h1">React Starter Kit</h2>
      </header>
    )
  }
}

Header.propTypes = {
  tagline : React.PropTypes.string.isRequired
}

export default Header;
