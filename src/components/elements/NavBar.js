import React from "react";
import MenuItem from "./MenuItem";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick(e) {
    const currentState = this.state.showMenu;
    this.setState({ showMenu: !currentState });
  }

  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="container">
          <div className="navbar-brand">

            <span
              className="navbar-burger burger"
              onClick={this.handleMenuClick}
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div
            className={
              "navbar-menu nav-menu " +
              (this.state.showMenu ? "is-active" : null)
            }
          >

            <div className="navbar-end" onClick={this.handleMenuClick}>
              <MenuItem text="About" href="#about" />
              <MenuItem text="News" href="#news" />
              <MenuItem text="Articles" href="#articles" />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
