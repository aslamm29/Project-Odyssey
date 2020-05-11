import React, { useState } from "react";
import { HashRouter } from "react-router-dom";

const Console = () => {
  const [angleDown, setAngleDown] = useState(true);

  return (
    <HashRouter basename='/'>
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
            <i className="fas fa-tachometer-alt"></i>
            <a href="/">Dashboard</a>
          </ul>
          <ul className="list-container">
            <i className="fas fa-share-alt"></i>
            <a href="/console">Console</a>
          </ul>
          <ul className="list-container">
            <i className="fas fa-list"></i>
            <a href="/tasks">Tasks</a>
          </ul>
          <ul className="list-container">
            <i className="far fa-file"></i>
            <span>Templates</span>
            <i
              className={`fas fa-angle-${!angleDown ? "up" : "down"}`}
              onClick={() => setAngleDown(!angleDown)}
            ></i>
          </ul>
          {!angleDown ? null : (
            <ul className="sub-list">
              <span className="selected">Forms</span>
            </ul>
          )}
        </section>
        <section className="content-area">
          <div className="box">
            <div className="title-area">
              <div className="title">Forms</div>
            </div>
            <div className="form-container">
              <div className="sub-form">
                <div className="sub-title-area">
                  <div className="sub-title">Contracts</div>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="sub-contents">
                  <div className="content">
                    <p>Sample Basic</p>
                    <p>Contract</p>
                  </div>
                  <div className="content">
                    <p>Sample</p>
                    <p>Contact Info</p>
                    <p>Contract</p>
                  </div>
                  <div className="content">
                    <p>Sample Initials</p>
                    <p>The Terms</p>
                    <p>Contract</p>
                  </div>
                </div>
              </div>
              <div className="sub-form">
                <div className="sub-title-area">
                  <div className="sub-title">Sub-Agreements</div>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="sub-contents">
                  <div className="content">
                    <p>Sample</p>
                    <p>Design Proof</p>
                  </div>
                  <div className="content">
                    <p>Sample</p>
                    <p>Release Water</p>
                  </div>
                </div>
              </div>
              <div className="sub-form">
                <div className="sub-title-area">
                  <div className="sub-title">Questionnaires</div>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="sub-contents">
                  <div className="content">
                    <p>Sample Intake</p>
                    <p>Questionnaire</p>
                  </div>
                  <div className="content">
                    <p>Sample</p>
                    <p>Resource/Info</p>
                    <p>Sheet</p>
                  </div>
                </div>
              </div>
              <div className="sub-form">
                <div className="sub-title-area">
                  <div className="sub-title">Extras</div>
                  <i className="fas fa-plus"></i>
                </div>
                <div className="sub-contents">
                  <div className="content">
                    <p>Extra Sample</p>
                    <p>Contact</p>
                  </div>
                  <div className="content">
                    <p>Sample</p>
                    <p>Contact Info</p>
                    <p>Contract</p>
                  </div>
                  <div className="content">
                    <p>Sample Initials</p>
                    <p>The Terms</p>
                    <p>Contract</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
    </HashRouter>
  );
};

export default Console;
