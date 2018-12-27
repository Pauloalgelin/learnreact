import React from "react"

function TodoItem(props){
    return (
        <div>
            <input type="checkbox" checked={props.obj.completed}></input>
            {props.obj.name}
        </div>
    )
}

export default TodoItem