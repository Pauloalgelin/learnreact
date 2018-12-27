import React from "react"

function TodoItem(props){
    return (
        <div>
            <input type="checkbox"></input>
            <p>{props.obj.name}</p>
        </div>
    )
}

export default TodoItem