import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';


class App extends Component {
  render () {

    return (
      <BrowserRouter>
        <div>
          <Layout />       
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
