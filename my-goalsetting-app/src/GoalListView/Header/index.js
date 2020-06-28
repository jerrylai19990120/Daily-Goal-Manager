import React from "react";

import "./styles.css";

/* The Header Component */
class Header extends React.Component {
  render() {
    const { title, subtitle } = this.props;

    return (
      <div className="header">
        <h1 className="title">{title}</h1>
        <h3 className="subtitle">{subtitle}</h3>
      </div>
    );
  }
}

export default Header;
