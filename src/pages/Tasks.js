import React, { useState } from 'react'

const Tasks = () => {
const [angleDown, setAngleDown] = useState(true);

return(
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
          <ul className="list-container selected">
            <i className="fas fa-list selected-clr"></i>
            <a href="/tasks" className="selected-clr">Tasks</a>
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
            <ul className="task-list">
              <span className="unselected">Forms</span>
            </ul>
          )}
        </section>
        <section className="content-area">
            <div id="task-container">
            <div className="task-header">
                <div className="task-title">Tasks</div>
                <div className="create-task"><span>+</span> Create Task</div>
            </div>
          <div className="task-box">
              <div className="task-box-header">
                  <div className="desc">Description</div>
                  <div className="assigned">Assigned</div>
                  <div className="priority">Priority</div>
              </div>
              <div className="task-data">
                  <div className="desc-data">Send notification</div>
                  <div className="assigned-data">Mark</div>
                  <div className="priority-data">High</div>
                  <div className="logo-btn">
                  <i className="far fa-sticky-note"></i>
                  <i className="far fa-trash-alt"></i>
                  </div>
              </div>
              <div className="task-data">
                  <div className="desc-data">Send notification</div>
                  <div className="assigned-data">Mark</div>
                  <div className="priority-data">High</div>
                  <div className="logo-btn">
                  <i className="far fa-sticky-note"></i>
                  <i className="far fa-trash-alt"></i>
                  </div>
              </div>
              <div className="new-task">
                  <div className="text">+ New Task Template</div>
                  </div>
          </div>
          </div>
        </section>
      </section>
    </section>
)
}

export default Tasks