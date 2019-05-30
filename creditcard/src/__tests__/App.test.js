import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("sets expMonth to either a numerical value or empty string", () => {
  const wrapper = shallow(<App />);

  // wrapper.find(".expirationMonth").simulate("change", {
  //   target: { value: 1234 }
  // });

  wrapper.instance().handleexpMonth({
    target: { value: 12, validity: { valid: true } }
  });

  expect(wrapper.state("expMonth")).toEqual(12);
});

it("sets expYear to either a numerical value or empty string", () => {
  const wrapper = shallow(<App />);

  wrapper.instance().handleexpYear({
    target: { value: 2019, validity: { valid: true } }
  });

  expect(wrapper.state("expYear")).toEqual(2019);
});

it("sets cvc to either a numerical value or empty string", () => {
  const wrapper = shallow(<App />);

  wrapper.instance().handlecvc({
    target: { value: 123, validity: { valid: true } }
  });

  expect(wrapper.state("cvc")).toEqual(123);
});
