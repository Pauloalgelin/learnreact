import React from "react"

class TodoItem extends React.Component {
    render(props){
        return (
            <div>
                <input type="checkbox" ></input>
                {this.props.obj.name}
            </div>
        )
    }
}

export default TodoItem