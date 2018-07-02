import React, { Component } from 'react';

import './App.css';
import Header from './Header.js';
import Article from './Article.js';
import Ad from './Ad.js';
import OtherArticles from './OtherArticles.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main className="expanded row">
          <Article />
          <Ad />
          <OtherArticles />
        </main>
        <footer />
      </div>
    );
  }
}

export default App;
