import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./TodoList.css"


function TodoList() {

    let [todos, setTodos] = useState([{ task: "Code", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    function addNewTask() {
        setTodos((prevVal) => {
            return [...prevVal, { task: newTodo, id: uuidv4(), isDone: false }]
        });
        setNewTodo("");
    }
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }
    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((revTodos) => revTodos.id != id));
    }

    let upperCaseAll = () => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            return {
                ...todo,
                task: todo.task.toUpperCase()
            }
        }));
    };

    let upperCaseOne = (id) => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                    task: todo.task.toUpperCase()
                };
            }
            else {
                return todo;
            }
            return {
                ...todo,
                task: todo.task.toUpperCase()
            }
        }));
    }

    let markAsDoneAll = () => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            return {
                ...todo,
                isDone: true,
            }
        }));
    };

    let markAsDone = (id) => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                    isDone: true
                };
            }
            else {
                return todo;
            }
            // console.log(todo);
            return {
                ...todo,
                task: todo.task.toUpperCase()
            }
        }));
    }

    let styles = { border: "2px solid black", padding: "2px" }
    return (
        <div className="container" >
            <h2 className="heading">Just do it!</h2>
            <div className="todo">

                <input type="text" placeholder="add a task" value={newTodo} onChange={updateTodoValue} />
                <br></br><br></br>
                <button class=" btn2" onClick={addNewTask} style={styles} >Add Task</button>
                <br></br><br></br>
                <hr></hr>
                <h4>Tasks Todo</h4>
                <ul>
                    {todos.map((todo) => {
                        return <li key={todo.id}>
                            <span class="todo-task" style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>{todo.task} &nbsp; </span>
                            <button class="button"  onClick={() => deleteTodo(todo.id)}>Delete</button>
                            {/* <button  class="button"  onClick={() => upperCaseOne(todo.id)} >UpperCase</button> */}
                            <button class="button"  onClick={() => markAsDone(todo.id)} >Mark As Done</button>
                        </li>
                    })}
                </ul>
                <br></br>
                {/* <button class="button"  onClick={upperCaseAll}>UpperCase</button> */}
                <button  class="button btn1" onClick={markAsDoneAll}>Mark as done All</button>
            </div>
        </div>
    )
}

export default TodoList;