import {observer} from "mobx-preact";
import {Todo} from "./Todo";
import {useStore} from "../store";

export const TodoList = observer(() => {
  const { todos, deleteTodo } = useStore();

  return (
    <ul>
      {todos.map((todo, ix) => <Todo todo={todo} deleteTodo={() => deleteTodo(ix)} />)}
    </ul>
  )
})
