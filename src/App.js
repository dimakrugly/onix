import React, { Component } from 'react';
import { Provider } from 'react-redux';
import translate from './services/translate/TranslateService';
import { ThemeProvider } from './providers/ThemeProvider';
import { Home } from './pages/home/Home';
import { store } from './store/store';

class App extends Component {
  render() {
    translate.init();
    return (
      <Provider store={store}>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
