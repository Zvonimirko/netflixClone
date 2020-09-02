import React from 'react';
import './App.css';
import Row from './components/row/Row'
import requests from './requests/requests'

function App() {
  return (
    <div className="App">
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
