import React from "react";
import "./MyTodo.css"
const MyTodo = (props) => {
    const todos = props.todos
    const todoItem = todos.map((todo, index) => {
        return (
            <div key={todo.id} className="myTodoList d-flex justify-content-between align-items-center mt-3">
                <div className="checkbox-container">
                    <input type="checkbox" onChange={(eo) => {
                        props.isCompleted(eo ,index)
                    }}></input>
                    <span className="custom-checkbox rounded-2"></span>
                </div>
                <h3 className="todo-title text-start ms-5" style={{textDecoration: todo.isCompleted ? "line-through" : "none"}}>{todo.title}</h3>
                <div className="icons d-flex gap-2">
                    <div className="icon" onClick={() => props.isEdited(index)}>
                    <i className="fa-solid fa-pen"></i>
                    </div>
                    <div className="icon" onClick={() => props.isDeleted(index)}>
                        <i className="fa-solid fa-trash"></i>
                    </div>
                </div>
                
            </div>
        )
    })
    return(
        <div className="text-center">
            <br /> 
            {/* {todos.length === 0 ? <h3>Hello</h3> : <h3>bye</h3>} */}
            {todos.length === 0 && (
                <h3>Let's get some work done!</h3>
            )}
            {todos.length > 0 && (
                todoItem
            )}

        </div>
    )
}
export default MyTodo