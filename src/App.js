import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      error: false
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ counter: this.state.counter + 1, error: false });
  }
  decrement() {
    let counter = this.state.counter,
      error = false;
    switch (true) {
      case counter !== 0:
        counter = counter - 1;
        error = false;
        break;
      default:
        counter = 0;
        error = true;
        break;
    }

    this.setState({
      counter: counter,
      error: error
    });
  }
  render() {
    return (
      <div>
        <div data-test="component-app" />
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}
        </h1>
        {this.state.error === true ? (
          <h2 style={{ color: 'red' }} data-test="error-display">
            counter cannot be zero
          </h2>
        ) : null}
        <button data-test="increment-button" onClick={this.increment}>
          Increment Counter
        </button>
        <button data-test="decrement-button" onClick={this.decrement}>
          Decrement Counter
        </button>
      </div>
    );
  }
}

export default App;
