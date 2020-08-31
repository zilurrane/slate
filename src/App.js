import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import HomeScreen from './screens/Home';

const App = () => {
  return (
    <ThemeProvider>
      <HomeScreen />
    </ThemeProvider>
  );
};

App.options = {
  topBar: {
    title: {
      text: 'SLATE'
    }
  }
}

export default App;
