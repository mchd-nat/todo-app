import "./App.css";
import DarkModeToggle from "./elements/DarkModeToggle/DarkModeToggle";
import NewTaskInput from "./elements/NewTaskInput/NewTaskInput";

function App() {
  return (
    <>
      <img
        id="background_image"
        src="https://mchd-nat.github.io/todo-app/images/bg-desktop-light.jpg"
        alt=""
      />
      <div className="task_manager">
        <header className="task_header">
          <h1>TODO</h1>
          <DarkModeToggle />
        </header>
        <div className="task_system">
          <NewTaskInput />
        </div>
      </div>
    </>
  );
}

export default App;
