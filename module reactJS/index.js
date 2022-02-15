import React from "react";
import ReactDOM from "react-dom";

import "./style.css";
import "./package.json";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      phrase: "INITIALISATION"
    };
  }

  methodInState = letter => {
    this.setState({
      phrase: this.state.phrase + letter
    });
  };

  render() {
    return (
      <div>
        <span>{this.state.phrase}</span>
        <Keyboard addLetter={this.methodInState.bind(this)} />
      </div>
    );
  }
}

class Keyboard extends React.PureComponent {
  render() {
    return (
      <div className="keyboard-line">
        <button onClick={() => this.props.addLetter("A")}>A</button>
        <button onClick={this.props.addLetter.bind(this, "B")}>B</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
