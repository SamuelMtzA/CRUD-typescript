import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Task } from "./interfaces/Task";
import { TaskForm } from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { v4 } from "uuid";

interface Props {
  title?: string;
}

const App = ({ title }: Props) => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: v4(),
      title: "Learn React",
      description: "Learn React Hooks",
      completed: false,
    },
  ]);

  const addNewTask = (task: Task): void => {
    //aading a id and completed by default to the new task
    setTasks([...tasks, {...task, id: v4(), completed: false}]);
  }

  const deleteTask = (id: string): void => {
    //return all tasks except the one with the id
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <NavBar title={title}/>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addNewTask={addNewTask}/>
          </div>

          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteTask={deleteTask}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export { App };
