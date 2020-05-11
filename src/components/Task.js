import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={`${task.id}`} index={index}>
      {(provided) => (
        <div className="task-data" key={task.id} {...provided.draggableProps}
        {...provided.dragHandleProps} ref={provided.innerRef}>
          <div className="desc-data">{task.description}</div>
          <div className="assigned-data">{task.assigned}</div>
          <div className="priority-data">{task.priority}</div>
          <div className="logo-btn">
            <i className="far fa-sticky-note"></i>
            <i className="far fa-trash-alt"></i>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
