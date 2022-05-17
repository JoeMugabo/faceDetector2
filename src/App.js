import { Component } from 'react';
import Appp from './components/Config/ParticlesBackground';
import Clarifai from 'clarifai'
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
  apikey: '63e31dd19799472bae)ed724a84370065'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  };

  onButtonChange = () => {
    console.log('click');
  app.models.predict("https://i.pinimg.com/originals/91/0e/e3/910ee36d8f24859911e8a806761e871c.jpg").then(
    function(response) {

    },
    function(response) {
      
    }

  )

  }
  render() {
    return (
    <div className="AppAlign">
      <Navigation />
      <Logo />
      <Rank /> 
      <ImageLinkForm onInputChange = {this.onInputChange} onButtonChange = {this.onButtonChange} 
      />
      <Appp />
      {/* { {<faceRecognition />}  */}
      </div>
  );
  }
  
}

export default App;
