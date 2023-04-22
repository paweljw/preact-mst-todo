import {observer} from "mobx-preact";

export const Todo = observer(({ todo, deleteTodo }) => (
  <li>
    {todo.done ? '[✓] ' : '[ ] '}
    <span style="text-decoration: underline; cursor: pointer" onClick={() => todo.toggle()}>{todo.task}</span>
    {' '}
    (<span style="text-decoration: underline; cursor: pointer" onClick={() => deleteTodo()}>delete</span>)
  </li>
))
