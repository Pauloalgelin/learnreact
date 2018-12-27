import React from "react"
import TodoItem from "./TodoItem"
import goals from "./Data"

class Checklist extends React.Component {
    render() {
        const todoItemArray = goals.map(item => <TodoItem key={item.id} obj={item} />)

        return (
            <div>
                {todoItemArray}
            </div>
        )
    }
}

export default Checklist