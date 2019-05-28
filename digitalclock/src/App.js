import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      even: true
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
    let minutes = this.state.time.getMinutes();

    if (minutes % 2 === 0) {
      this.state.even = true;
    } else {
      this.state.even = false;
    }

    return (
      <div className="parent">
        Digital Clock
        <div className="clock">
          <span className={this.state.even ? "timeEven" : "time"}>
            {this.state.time.toLocaleTimeString()}
          </span>
        </div>
      </div>
    );
  }
}

export default App;
