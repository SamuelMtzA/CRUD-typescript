import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Task } from "../interfaces/Task";

interface Props {
  addNewTask: (task: Task) => void;
}

type handleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type handleSubmit = FormEvent<HTMLFormElement>;

const initialState = {
  title: "",
  description: "",
}

export const TaskForm = ({ addNewTask }: Props) => {
  const [task, setTask] = useState(initialState);

  const handleSubmitChange = (e: handleSubmit) => {
    e.preventDefault();
    addNewTask(task);
    setTask(initialState);
  };

  const handleInputChanged = ({
    target: { name, value },
  }: handleInputChange) => {
    //upadate state with new value
    setTask({
      ...task,
      [name]: value,
    });
  };
  return (
    <div className="card card-body bg-secondary text-dark">
      <form onSubmit={handleSubmitChange}>
        <input
          type="text"
          placeholder="Write a text"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={handleInputChanged}
          value={task.title}
        />
        <textarea
          className="form-control mb-3 rounded-0 shadow-none border-0"
          name="description"
          placeholder="Write a description"
          rows={2}
          onChange={handleInputChanged}
          value={task.description}
        ></textarea>
        <button className="btn btn-primary">
          Add
          <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
};
