import React from "react"

function TodoItem(props){
    return (
        <div>
            <input type="checkbox"></input>
            {props.name}
        </div>
    )
}

export default TodoItem