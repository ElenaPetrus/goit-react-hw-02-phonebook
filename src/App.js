/* eslint-disable no-unused-vars */

import React, { Component } from 'react';

import { Todolist } from './components/Todolist/Todolist';

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Выучить основы React', completed: true },
      { id: 'id-2', text: 'Разобраться с React Router', completed: false },
      { id: 'id-3', text: 'Пережить Redux', completed: false },
    ],
    inputValue: '',
  };

  handleInputChange = event => {
    // console.log(event.currentTarget.value);
    this.setState({ inputValue: event.currentTarget.value });
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );

    return (
      <div className="container">
        <div>
          <span> Q Todo:{totalTodoCount}</span>
          <span> Q Todo done:{completedTodoCount}</span>
          <form>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={this.state.inputValue}
              onChange={this.handleInputChange}
            />
          </form>
        </div>
        <Todolist todos={todos} onDeleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
