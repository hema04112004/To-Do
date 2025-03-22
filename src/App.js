import React, { Component } from "react";
import "./App.css"; // Import custom styles

class App extends Component {
    constructor(props) {
        super(props);

        // State for managing input and list
        this.state = {
            userInput: "",
            list: [],
        };
    }

    // Update input state
    updateInput(value) {
        this.setState({
            userInput: value,
        });
    }

    // Add item to the list
    addItem() {
        if (this.state.userInput.trim() !== "") {
            const newItem = {
                id: Math.random(),
                value: this.state.userInput,
            };

            this.setState({
                list: [...this.state.list, newItem],
                userInput: "",
            });
        }
    }

    // Delete item from list
    deleteItem(id) {
        const updatedList = this.state.list.filter((item) => item.id !== id);
        this.setState({ list: updatedList });
    }

    // Edit an item in the list
    editItem(index) {
        const updatedList = [...this.state.list];
        const editedValue = prompt("Edit the task:", updatedList[index].value);

        if (editedValue !== null && editedValue.trim() !== "") {
            updatedList[index].value = editedValue;
            this.setState({ list: updatedList });
        }
    }

    render() {
        return (
            <div className="container">
                <h1>TODO LIST</h1>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Add item..."
                        value={this.state.userInput}
                        onChange={(e) => this.updateInput(e.target.value)}
                    />
                    <button className="add-btn" onClick={() => this.addItem()}>
                        ADD
                    </button>
                </div>
                <ul className="task-list">
                    {this.state.list.map((item, index) => (
                        <li key={item.id}>
                            {item.value}
                            <div>
                                <button className="edit-btn" onClick={() => this.editItem(index)}>
                                    Edit
                                </button>
                                <button className="delete-btn" onClick={() => this.deleteItem(item.id)}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;
