import React, {Component} from 'react';
import ToDo from './ToDo';
import {Consumer} from '../context';
import '../App.css'

export default class ToDos extends Component {
    render() {
        return(
            <Consumer>
                {value => {
                    const { todos } = value;
                    return todos.map(todo => <ToDo todo={todo} key={todo.id} />)
                }}
            </Consumer>
        )
    }
}