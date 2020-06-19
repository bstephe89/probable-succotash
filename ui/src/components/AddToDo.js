import React, {Component} from 'react';
import {Consumer} from '../context';
import axios from 'axios';
import '../App.css'

export default class AddToDo extends Component {
    state = {}
    update = (event) => {
        this.setState({title: event.target.value})
    }
    add = (dispatch, event) => {
        event.preventDefault();
        const newToDo = this.state;
        axios.post("/todos", newToDo)
        .then(res => dispatch({type: "ADD", payload: res.data}))
        this.setState({title: ""})
    }
    render() {
        return(
            <Consumer>{value=>{
                const {dispatch} = value;
                return <form onSubmit={this.add.bind(this, dispatch)}>
                <input type="text" className="newTodo" placeholder="Type your new To-Do here" onChange={this.update} value={this.state.title}/>
                <button type="submit" className="submitBtn">
                Add New To-Do
                </button>
            </form>
            }}
            </Consumer>
        )
    }
}