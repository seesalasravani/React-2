import React, { Component } from "react";

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todo: "",
            list: [],
        };
    }

    // Updates the todo state when input changes
    handleChange = (event) => {
        this.setState({ todo: event.target.value });
    };

    // Adds a new todo to the list
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.todo.trim() === "") return; // Prevent empty todos

        this.setState((prevState) => ({
            list: [...prevState.list, prevState.todo],
            todo: "", // Clear the input after submission
        }));
    };

    // Deletes a todo from the list
    handleDelete = (index) => {
        this.setState((prevState) => ({
            list: prevState.list.filter((_, i) => i !== index),
        }));
    };

    render() {
        return (
            <div>
            
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Enter a task"
                        value={this.state.todo}
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Add" />
                </form>
                <ul>
                    {this.state.list.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button
                                onClick={() => this.handleDelete(index)}
                                style={{
                                    marginLeft: "10px",
                                    backgroundColor: "red",
                                    color: "white",
                                    border: "none",
                                    cursor: "pointer",
                                    padding: "5px 10px",
                                    borderRadius: "3px",
                                }}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Todo;
