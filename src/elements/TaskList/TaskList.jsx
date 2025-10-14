import "./TaskList.css";
function TaskList() {
  return (
    <>
      <div className="task_list">
        <div className="empty_list">
          <p>No tasks! Take the day off :.)</p>
        </div>
        <div className="divider"></div>
        <div className="controls">
          <span>0 items left</span>
          <ul>
            <li>
              <button>All</button>
            </li>
            <li>
              <button>Active</button>
            </li>
            <li>
              <button>Completed</button>
            </li>
          </ul>
          <button>Clear Completed</button>
        </div>
      </div>
    </>
  );
}

export default TaskList;
