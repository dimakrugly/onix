import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import translate from './services/translate/TranslateService';
import { Navigation } from './components/Navigation/Navigation';
import { ThemeProvider } from './providers/ThemeProvider';

class App extends Component {
  render() {
    translate.init();
    return (
      <ThemeProvider>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
