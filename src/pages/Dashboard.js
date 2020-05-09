import React from "react";

const Dashboard = () => {
  return (
    <section id="dashboard">
      <header>
        <div className="logo">
          <i className="fas fa-search"></i>
        </div>
        <div className="header-menu">
          <a href="#">Dasboard</a>
          <a href="#">Console</a>
          <a href="#">Tasks</a>
        </div>
        <div className="menu-btn">
          <i className="far fa-bell"></i>
          <div className="avatar" />
        </div>
      </header>
    </section>
  );
};

export default Dashboard;
