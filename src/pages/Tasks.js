import React, { useState } from "react";
import Task from "../components/Task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Link } from "react-router-dom"

const Tasks = () => {
  const [angleDown, setAngleDown] = useState(true);
  const [taskData, setTaskData] = useState([
    {
      id: 1,
      description: "Send Notification to parents",
      assigned: "Me",
      priority: "High",
    },
    {
      id: 2,
      description: "Sarah to pick-up at 2",
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

  const onDragEnd = result => {
    const { destination, source } = result;

    if (!destination) {
        return;
      }

      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }

      const start = taskData[source.index]
      //handles moving the tasks around
      const newTasks = taskData
      newTasks.splice(source.index, 1)
      newTasks.splice(destination.index, 0, start)
      setTaskData(newTasks)
  }

  return (
    <section id="console">
      <header>
        <Link to={`/console`} className="logo">
          <div className="logo-img" />
        </Link>
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
            <Link to={`/`}>Dashboard</Link>
          </ul>
          <ul className="list-container">
            <i className="fas fa-share-alt"></i>
            <Link to={`/console`}>Console</Link>
          </ul>
          <ul className="list-container selected">
            <i className="fas fa-list selected-clr"></i>
            <Link to={`/tasks`} className="selected-clr">
              Tasks
            </Link>
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
          <h3>MY LEADS</h3>
          <ul className="list-container">
          <i className="far fa-calendar"></i>
            <span>Tour Requests</span>
          </ul>
          <ul className="list-container">
          <i className="fas fa-users"></i>
            <span>Connections</span>
          </ul>
          <h3>ENROLLMENT</h3>
          <ul className="list-container">
          <i className="far fa-newspaper"></i>
            <span>News Feed</span>
          </ul>
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
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="tasks">
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      {taskData.map((task, index) => (
                        <Task key={task.id} task={task} index={index} />
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
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
