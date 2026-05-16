import { useState } from "react"
import { createTask } from "../services/taskService"
import { message } from "antd"


const TaskForm=()=>{
    let [task,setTask]= useState({
        title:"",
        description:"",
        priority:"HIGH",
        status:"PENDING",
        dueDate:""

    })

    const handleChange=(e)=>{
        e.preventDefault()
        setTask({
            ...task,
            [e.target.name]:e.target.value

        })
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            await createTask(task)
            message.success('created task');
        }
        catch(error){
            message.error('Invalid ');
        }

    }

    return(<form onSubmit={handleSubmit}>
            <h2>Create Task</h2>
            <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
            />
            <input
                type="text"
                name="description"
                placeholder="Description"
                onChange={handleChange}
            />
            <input
                type="date"
                name="dueDate"
                onChange={handleChange}
            />
            <select
                name="priority"
                onChange={handleChange}
            >
                <option value="HIGH">HIGH</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="LOW">LOW</option>
            </select>
            <select
                name="status"
                onChange={handleChange}
            >
                <option value="PENDING">PENDING</option>
                <option value="IN_PROGRESS">IN_PROGRESS</option>
                <option value="COMPLETED">COMPLETED</option>
            </select>
            <button type="submit">
                Create Task
            </button>
        
        </form>
       )
}


export default TaskForm