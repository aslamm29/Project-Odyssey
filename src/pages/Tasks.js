import React, { useState } from "react";

const Tasks = () => {
  const [angleDown, setAngleDown] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [taskData, setTaskData] = useState([
    {
      id: 1,
      description: "Send Notification to parents",
      assigned: "Me",
      priority: "High",
    },
    {
      id: 2,
      description: "Sarach to pick-up at 2",
      assigned: "Sarah",
      priority: "High",
    },
    {
      id: 3,
      description: "Buy some crayons",
      assigned: "Jessica",
      priority: "Low",
    },
    {
      id: 4,
      description: "Plan activities",
      assigned: "Me",
      priority: "Medium",
    },
    {
      id: 5,
      description: "Find a day care",
      assigned: "Andrew",
      priority: "Medium",
    },
  ]);

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
            <i className="fas fa-tachometer-alt"></i>
            <a href="/">Dashboard</a>
          </ul>
          <ul className="list-container">
            <i className="fas fa-share-alt"></i>
            <a href="/console">Console</a>
          </ul>
          <ul className="list-container selected">
            <i className="fas fa-list selected-clr"></i>
            <a href="/tasks" className="selected-clr">
              Tasks
            </a>
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
              <div className="create-task">
                <span>+</span> Create Task
              </div>
            </div>
            <div className="task-box">
              <div className="task-box-header">
                <div className="desc">Description</div>
                <div className="assigned">Assigned</div>
                <div className="priority">Priority</div>
              </div>
              {taskData.map((task) => (
                <div className="task-data" key={task.id}>
                  <div className="desc-data">{task.description}</div>
                  <div className="assigned-data">{task.assigned}</div>
                  <div className="priority-data">{task.priority}</div>
                  <div className="logo-btn">
                    <i className="far fa-sticky-note"></i>
                    <i className="far fa-trash-alt"></i>
                  </div>
                </div>
              ))}
              <div className="new-task">
                <div className="text">+ New Task Template</div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Tasks;
