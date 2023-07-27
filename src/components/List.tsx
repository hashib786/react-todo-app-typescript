import { Task } from "../models/types";

interface ListData {
  data: Task[];
  deleteTask:(taskId : string) => void;
}
const List = ({ data, deleteTask }: ListData) => {
  return (
    <ul>
      {data.map((task) => (
        <li key={task.id}>
          <span>{task.description}</span>
        <button onClick={()=> deleteTask(task.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
