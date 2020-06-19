import React, {Component} from 'react';
import {Consumer} from '../context';
import axios from 'axios';

export default class ToDo extends Component {
    delete = (id, dispatch) => {
        axios.delete(`/todos/${id}`)
        .then(() => dispatch({type:"DELETE", payload: id}))
    }
    render() {
        const {title, _id} = this.props.todo;
        return(
            <Consumer>{value=>{
                const {dispatch} = value;
                return <div className="todos-container">
                        <h2>
                            <button className="deleteBtn" onClick={this.delete.bind(this, _id, dispatch)}>X</button>{title}
                        </h2>
                    </div>
            }}</Consumer>
        )

    }
}