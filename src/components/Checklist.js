import React from "react"
import TodoItem from "./TodoItem"

function Checklist() {
    const meu = {name: "este"}
    return (
        <div>
            <TodoItem obj={meu}/>
            <TodoItem obj={meu}/>
            <TodoItem obj={meu}/>
        </div>
    )
}

export default Checklist