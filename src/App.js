import React, { Component } from 'react';
import GlobalStyles, { Container } from './App.style.js';
import Welcome from './components/Welcome/Welcome';
import Fork from './components/Fork/Fork';
import GalleryContainer from './containers/GalleryContainer';

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyles />
        <Fork />
        <Welcome />
        <GalleryContainer />
      </Container>
    );
  }
}

export default App;
