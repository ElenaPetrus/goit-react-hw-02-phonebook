import React from 'react';
import PropTypes from 'prop-types';
import s from './Todolist.module.css';

const Todolist = ({ todos, onDeleteTodo }) => (
  <ul className={s.TodoList}>
    {todos.map(({ id, text }) => (
      <li key={id} className={s.item}>
        <p className={s.text}>{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);

Todolist.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
};

export { Todolist };
