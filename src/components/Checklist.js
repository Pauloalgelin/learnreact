import React from "react"
import TodoItem from "./TodoItem"
import goals from "./Data"

class Checklist extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: goals
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const newGoals = prevState.todos.map(item => {
                if(item.id === id) {
                    item.completed = !item.completed
                }
                return item
            })
            return {
                todos: newGoals
            }
        })
    }

    render() {
        const todoItemArray = this.state.todos.map(item =>
            <TodoItem
                key={item.id}
                obj={item}
                handleChange={this.handleChange}
            />
        )

        return (
            <div>
                {todoItemArray}
            </div>
        )
    }
}

export default Checklist