import React from 'react';
import soundfile from './doIt.mp3';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      flag: true
    }
  }

  play = () => {
    var audio = document.querySelector('audio');
    if (this.state.flag === true) {
      audio.play();
    } else {
      audio.pause();
    }

    this.setState({
      flag: !this.state.flag
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.play}>Press Me to "Do It!"</button>
        <audio src={soundfile}></audio>
      </div>
    )
  }
};

export default App;