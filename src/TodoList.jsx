import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


export default function TodoList() {
    let [todos, setTodo] = useState([{task : "simple task", id: uuidv4( ), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = ()=>{
        setTodo((prevTodo)=>{
            return [...prevTodo, {task: newTodo, id: uuidv4(), isDone: false}]
        });
    }
 
    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    }

    let removeTask = (id)=>{
        setTodo(todos.filter((todo)=>todo.id !=id));
    }

    let markAsDone = (id)=>{
        setTodo((prevTodo)=>{
            return prevTodo.map((todo)=>{
                if(todo.id === id){
                    return{
                        ...todo,
                        isDone: true,
                    };
                }else{
                    return todo;
                }
            })
        })
    }

    let markAllAsDone = ()=>{
        setTodo((prevTodo)=>{
            return prevTodo.map((todo)=>{
                    return{
                        ...todo,
                        isDone: true,
                    };
            
            })
        })
    }

    return (<div>
        <input placeholder="add a task" 
        value={newTodo}  
        onChange={updateTodoValue}>
            </input><br></br>
        <button onClick={addNewTask}>Add Task</button>
        <br></br>
        <hr></hr>
        <br></br><br></br><br></br>
        <h4>Task To Do</h4>
        <ul>
        {
            
            todos.map((todo)=>(
               <li key="todo.id">
                <span style={todo.isDone ? {textDecoration: "line-through"}:{}}>{todo.task}</span>
                <span><button onClick={()=>removeTask(todo.id)}>Delete</button></span>
                <span><button onClick={()=>markAsDone(todo.id)} className="md">Mark Is Done</button></span>
               </li>
            ))
        }
        </ul>
        <button onClick={markAllAsDone}>Mark all as done</button>

        </div>)
}