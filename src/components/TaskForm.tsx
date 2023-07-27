import {useState} from "react"

import { Task } from "../models/types";

interface HandleTaskForm{
    addTask : (task : Task) => void;
}

const TaskForm = ( {addTask} : HandleTaskForm) => {
    const [task, setTask] = useState("")

    const handleSubmit = (e : React.FormEvent)=>{
        e.preventDefault()
        if(!task) return
        const todo : Task = {
            id : Math.random() + "",
            description : task
        }
        addTask(todo)
        setTask("")
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Your Task" value={task} onChange={e => setTask(e.target.value)} />
        <button type="submit">Add Task</button>
    </form>
  )
}

export default TaskForm