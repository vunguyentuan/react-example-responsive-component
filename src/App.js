import React, { Component } from 'react';
import logo from './logo.svg';
import Responsive from './components/Responsive'
import Layout1 from './components/layout1'
import Layout2 from './components/layout2'
import debounce from 'lodash/debounce'
import './App.css'

class App extends Component {
  render() {
    return <Responsive breakpoint={300} layout1={Layout1} layout2={Layout2} />
  }
}

export default App;
