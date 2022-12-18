import React from 'react';

export class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: [
        { name: 'The Legend of Zelda', id: 1 },
        { name: 'A Link to the Past', id: 2 }
      ],
      modal: false
    };
    this.handleModal = this.handleModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleModal() {
    this.setState({ !this.state.modal });
  }

  handleClick() {
    this.setState({ modal: false });
  }

  render() {
    let display = 'hidden';
    let bar = 'fa-solid fa-bars';
    let overlay = '';

    if (this.state.modal) {
      display = '';
      bar = 'fa-solid fa-bars hidden';
      overlay = 'overlay';
    }

    const list = this.state.title.map((link) =>
      <li key={title.id} onClick={this.handleClick}>
        {title.name}
      </li>
    )

    return (
      <div className="container">
        <div className="menu-bar">
          <div
          className={overlay}
          onClick={this.handleClick}>
          </div>
          <div className={display}>
            <div className='menu'>Choose a Game</div>
            <ul>
              {list}
            </ul>
          </div>
        </div>
      </div>
    )
  }

}
