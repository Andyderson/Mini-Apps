import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      evenMin: true,
      oddSec: true,
      evenHour: true
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
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();

    if (hours % 2 === 0) {
      this.state.evenHour = true;
    } else {
      this.state.evenHour = false;
    }

    if (minutes % 2 === 0) {
      this.state.evenMin = true;
    } else {
      this.state.evenMin = false;
    }

    if (seconds % 2 !== 0) {
      this.state.oddSec = true;
    } else {
      this.state.oddSec = false;
    }

    if (seconds)
      return (
        <div className="parent">
          Digital Clock
          <div className="clock">
            {/* <span className={this.state.evenMin ? "timeEvenMin" : "time"}>
              {this.state.time.toLocaleTimeString()}
            </span> */}
            <span className={this.state.evenHour ? "timeEvenHour" : "time"}>
              {hours}:
              <span className={this.state.evenMin ? "timeEvenMin" : "time"}>
                {minutes}:
              </span>
              <span className={this.state.oddSec ? "timeOddSec" : "time"}>
                {seconds}
              </span>
            </span>
          </div>
        </div>
      );
  }
}

export default App;
