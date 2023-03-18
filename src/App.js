import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import translate from './services/translate/TranslateService';
import { Navigation } from './components/Navigation/Navigation';

class App extends Component {
  render() {
    translate.init();
    return (
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
  }
}

export default App;
