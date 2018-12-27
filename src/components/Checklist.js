import React from "react"
import TodoItem from "./TodoItem"
import goals from "./Data"

function Checklist() {
    const todoItemArray = goals.map(item => <TodoItem key={item.id} obj={item} />)

    return (
        <div>
            {todoItemArray}
        </div>
    )
}

export default Checklist