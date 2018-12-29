import React from "react"

function TodoItem(props) {
    return(
        <div>
            <input
                type="checkbox"
                checked={props.obj.completed}
                onChange={() => props.handleChange(props.obj.id)}
            />
            {props.obj.name}
        </div>
    )
}

export default TodoItem