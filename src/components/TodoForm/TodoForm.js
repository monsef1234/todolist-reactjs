import React, { Component } from "react";
import "./TodoForm.css"

class TodoForm extends Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.onSubmitHandler}>
                    <div className="d-flex flex-row align-items-center justify-content-center rounded-3 p-3 fs-5 mx-auto ">
                    <i className="fa-solid fa-list me-2"></i>
                    <input type="text" placeholder="Add a task ..." autoComplete="off" value={this.props.newTodo} onChange={this.props.handleChange} className="text-white"></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default TodoForm 