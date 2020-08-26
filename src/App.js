import React,{useState} from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Results from './Results';
import requests from './requests';

function App() {
  const [selectedOptions,setSelectedOptions] = useState(requests.fetchTrending);
  return (
    <div className="app">
  <Header/>
  <Nav setSelectedOptions={setSelectedOptions}/>
  <Results selectedOption={selectedOptions}/>
  </div>
  );
}

export default App;
