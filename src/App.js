import React, { Component } from 'react';
import Home from './pages/home/Home';
import translate from './services/translate/TranslateService';

class App extends Component {
  render() {
    translate.init();
    return (
      <Home />
    );
  }
}

export default App;
