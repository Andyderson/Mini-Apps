import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.update = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.update);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    return (
      <div className="parent">
        Digital Clock
        <div className="clock">
          <span className="time">{this.state.time.toLocaleTimeString()}</span>
        </div>
      </div>
    );
  }
}

export default App;
