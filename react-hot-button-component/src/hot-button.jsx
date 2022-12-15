import React from 'react';

export class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ click: 0 });
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(props) {
    this.setState((state, props) => ({
      click: state.click + 1
    }));
  }

  render() {
    let button = 'button-purple';
    const buttonText = 'Hot Button';

    if (this.state.click <= 3) {
      button = 'button-purple';
    } else if (this.state.click <= 6) {
      button = 'button-light-purple';
    } else if (this.state.click <= 9) {
      button = 'button-coral';
    } else if (this.state.click <= 12) {
      button = 'button-orange';
    } else if (this.state.click <= 15) {
      button = 'button-yellow';
    } else if (this.state.click <= 18) {
      button = 'button-white';
    }
    return <button className={`${button}`} onClick={this.handleClick}>{buttonText}</button>
  }
}
