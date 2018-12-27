import React from "react"
import TodoItem from "./TodoItem"
import goals from "./Data"

function Checklist() {
    const todoItemArray = goals.map(data => <TodoItem key={data.id} name={data.name} />)

    return (
        <div>
            {todoItemArray}
        </div>
    )
}

export default Checklist