import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      ccNum: "",
      expMonth: "",
      expYear: "",
      cvc: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("Submit button activated!");

    axios
      .post("/profile", {
        name: this.refs.name.value,
        ccNum: this.refs.creditCard.value,
        expMonth: this.refs.expirationMonth.value,
        expYear: this.refs.expirationYear.value,
        cvc: this.refs.cvc.value
      })
      .then(res => {
        console.log("Axios POST Success", res);
      })
      .catch(error => {
        console.log("Axios POST Error", error);
      });
  };

  handleccNum = e => {
    const ccNum = e.target.validity.valid ? e.target.value : this.state.ccNum;

    this.setState({
      ccNum
    });
  };

  handleexpMonth = e => {
    const expMonth = e.target.validity.valid
      ? e.target.value
      : this.state.expMonth;

    this.setState({
      expMonth
    });
  };

  handleexpYear = e => {
    const expYear = e.target.validity.valid
      ? e.target.value
      : this.state.expYear;

    this.setState({
      expYear
    });
  };

  handlecvc = e => {
    const cvc = e.target.validity.valid ? e.target.value : this.state.cvc;

    this.setState({
      cvc
    });
  };

  handleClear = () => {
    this.refs.name.value = "";
    this.refs.creditCard.value = "";
    this.refs.expirationMonth.value = "";
    this.refs.expirationYear.value = "";
    this.refs.cvc.value = "";
  };

  render() {
    return (
      <div className="parent">
        <form>
          <label className="nameInput">
            Name:
            <input
              type="text"
              name="name"
              className="inputField"
              placeholder="Name Of Cardholder"
              ref="name"
            />
          </label>
          <label className="ccInput">
            Credit Card Number:
            <input
              type="text"
              pattern="^[0-9]+$"
              name="creditCard"
              className="inputField"
              placeholder="Credit Card Number"
              ref="creditCard"
              onChange={e => {
                this.handleccNum(e);
              }}
              value={this.state.ccNum}
            />
          </label>
          <label className="expirationDate">
            Expiration Date:
            <input
              type="text"
              pattern="^[0-9]+$"
              name="expirationMonth"
              className="expirationMonth"
              placeholder="MM"
              ref="expirationMonth"
              onChange={e => {
                this.handleexpMonth(e);
              }}
              value={this.state.expMonth}
            />
            /
            <input
              type="text"
              pattern="^[0-9]+$"
              name="expirationYear"
              className="expirationYear"
              placeholder="YYYY"
              ref="expirationYear"
              onChange={e => {
                this.handleexpYear(e);
              }}
              value={this.state.expYear}
            />
            <input
              type="text"
              pattern="^[0-9]+$"
              name="cvc"
              className="cvc"
              placeholder="CVC"
              ref="cvc"
              onChange={e => {
                this.handlecvc(e);
              }}
              value={this.state.cvc}
            />
          </label>
          <br />
          <div className="actionButtons">
            <button type="submit" id="submit" onClick={this.handleSubmit}>
              Submit
            </button>
            <button type="button" id="clear" onClick={this.handleClear}>
              Clear
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
