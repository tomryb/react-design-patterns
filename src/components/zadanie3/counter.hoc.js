import React, { Component } from 'react';

function counterHoc(WrappedComponent) {
  return class extends Component {
    state = { counter: 0 };

    handleIncrement = () => this.setState({ counter: this.state.counter + 1 });
    handleDecrement = () => this.setState({ counter: this.state.counter - 1 });
    handleReset = () => this.setState({ counter: 0});


    render() {
      return (
        <WrappedComponent counter={this.state.counter} handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement} handleReset={this.handleReset} />
      )
    }

  }
}

export default counterHoc;