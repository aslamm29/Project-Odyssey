import React from "react";

const Console = () => {
  return (
    <section id="console">
      <header>
        <a href="/console" className="logo">
          <div className="logo-img" />
        </a>
        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input
            className="search-input"
            type="text"
            placeholder="Search projects and clients"
          />
        </div>
        <div className="menu-btn">
          <i className="far fa-envelope"></i>
          <i className="far fa-bell"></i>
          <i className="fas fa-cog"></i>
        </div>
      </header>
      <section className="content-section">
        <section className="select-menu">
            <ul className="list-container">
            <i class="fas fa-tachometer-alt"></i>
                <a href="/">Dashboard</a>
            </ul>
            <ul className="list-container">
            <i class="fas fa-share-alt"></i>
            <a href="/console">Console</a>
            </ul>
            <ul className="list-container">
            <i class="fas fa-list"></i>
            <a href="/tasks">Tasks</a>
            </ul>
            <ul className="list-container">
            <i class="far fa-file"></i>
            <span>Templates</span>
            <i class="fas fa-angle-down"></i>
            </ul>
            <ul className="sub-list">
            <span className="selected">Forms</span>
            </ul>
        </section>
        <section className="content-area">
            Content Comes Here!!!
        </section>
    </section>
    </section>
  );
};

export default Console;
