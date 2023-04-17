import React, { Component } from 'react';
import translate from './services/translate/TranslateService';
import { ThemeProvider } from './providers/ThemeProvider';
import { Home } from './pages/home/Home';

class App extends Component {
  render() {
    translate.init();
    return (
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    );
  }
}

export default App;
