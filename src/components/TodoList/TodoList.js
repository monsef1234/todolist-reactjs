import React, { Component } from "react";
import "./TodoList.css"
import TodoForm from "../TodoForm/TodoForm";
import MyTodo from "../MyTodo/MyTodo";  
class TodoList extends Component {
    state = {
        todos : [], 
        newTodo: ""
    }
    handleChange = (eo) => {
        const valueForm = eo.target.value
        this.setState({
            newTodo : valueForm,
        })
    }
    onSubmitHandler = (eo) => {
        eo.preventDefault()
        let TodosLength = this.state.todos.length
        if (this.state.newTodo.trim() === "") {
            return alert("Write Somthing Please!")
        }
        this.setState({
            newTodo: "",
            todos :[
                ...this.state.todos,
                {
                id: TodosLength + 1,
                title: this.state.newTodo,
                isCompleted: false
            }] 
            
        })
    }   
    isCompletedHandler = (eo, index) => {
        const todoCompleted = this.state.todos
        todoCompleted.filter(todo => {
            if (todo.id === index + 1) {
                todo.isCompleted = eo.target.checked
            }
            return todo
        })
        this.setState({todos : todoCompleted})
    }
    isDeletedHandler = (index) => {
        const todos = this.state.todos
        todos.splice(index, 1)
        this.setState({todos,})
    }
    editHandler = (index) => {
    const todos = this.state.todos 
    const newTodo = prompt("Enter the edit")
    todos.filter(todo => {
        if(todo.id === index + 1 ) {
                todo.title = newTodo
        } return todo
        
    })
            this.setState({todos,})
    }
    render() {
        return (
            <div className="todo-list d-flex-column mt-5 mx-auto rounded-3 py-5 px-3 px-md-5">
                <TodoForm  newTodo={this.state.newTodo} handleChange={this.handleChange} onSubmitHandler={this.onSubmitHandler}/>
                <MyTodo todos={this.state.todos} isCompleted={this.isCompletedHandler} isDeleted={this.isDeletedHandler} isEdited= {this.editHandler}/>
            </div>
        )
    }
}
export default TodoList 