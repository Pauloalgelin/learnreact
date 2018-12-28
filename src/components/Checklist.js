import React from "react"
import TodoItem from "./TodoItem"
import goals from "./Data"

class Checklist extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: goals
        }
    }
    render() {
        const todoItemArray = this.state.todos.map(item => <TodoItem key={item.id} obj={item} />)

        return (
            <div>
                {todoItemArray}
            </div>
        )
    }
}

export default Checklist