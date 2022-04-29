import { Component } from 'react';
import Appp from './components/Config/ParticlesBackground';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import './App.css';


class App extends Component {
  render() {
    return (
    <div className="App">
      <Appp />
      <Navigation />
      <Logo />
      <Rank /> 
      <ImageLinkForm />
      
      
      {/* { {<faceRecognition />}  */}
      </div>
  );
  }
  
}

export default App;
