import { v4 } from "uuid";
import { Task } from "../interfaces/Task";

interface Props {
  task: Task;
  deleteTask: (id: string) => void;
}

export const TaskCard = ({ task, deleteTask }: Props) => {
  const { id,title, description, completed } = task;
  return (
    <div key={id} className="card card-body bg-secondary rounded-0 text-dark">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{completed ? "Completed" : "Not Completed"}</p>
      <button 
      className="btn btn-danger"
      onClick={() => task.id && deleteTask(task.id)}
      >Delete</button>
    </div>
  );
};
