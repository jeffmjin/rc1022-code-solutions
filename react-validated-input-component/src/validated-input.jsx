import React from 'react';

export class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handleChar = this.handleChar.bind(this);
  }

  handleChar(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    let text = '';
    let display = '';
    let icon = '';

    if (this.state.password.length === 0) {
      text = 'Your password is required.';
      display = 'red';
      icon = 'fa-solid fa-x';
    } else if (this.state.password.length < 8) {
      text = 'A password is too short.';
      display = 'red';
      icon = 'fa-solid fa-x';
    } else if (this.state.password.length > 7) {
      icon = 'fa-solid fa-check';
    }

    return (
      <form>
        <label htmlFor="password">Password</label>
        <input type="password" onChange={ this.handleChar }/>
        <i className={icon}></i>
        <p className={display}>{text}</p>
      </form>
    );
  }
}
