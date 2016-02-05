/*
  App
*/

import React from 'react';
import Header from './Header';
import autobind from 'autobind-decorator';


@autobind
class App extends React.Component {

  constructor() {
    super();
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="">
        <div className="">
          <Header tagline="Nickbytes" />
        </div>
      </div>
    )
  }

};

export default App;
