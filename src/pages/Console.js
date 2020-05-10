import React from "react";

const Console = () => {
  return (
    <section id="console">
      <header>
        <div className="logo">
          <div className="logo-img" />
        </div>
        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input
            className="search-input"
            placeholder="Search projects and clients"
          />
        </div>
        <div className="menu-btn">
          <i className="far fa-envelope"></i>
          <i className="far fa-bell"></i>
          <i className="fas fa-cog"></i>
        </div>
      </header>
    </section>
  );
};

export default Console;
