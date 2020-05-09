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
      <div className="welcome-section">
        <div className="img" />
        <div className="content">
          <h2>Good morning, Mackenzie.</h2>
          <p>Coffee? Check. It's time to take on the day.</p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
