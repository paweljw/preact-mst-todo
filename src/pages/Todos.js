import {useStore} from "../store";
import {Todo} from "../components/Todo";
import {observer} from "mobx-preact";
import {TodoForm} from "../components/TodoForm";
import {TodoList} from "../components/TodoList";

export const Todos = () => (
    <>
      <h2>Todos</h2>
      <TodoForm />
      <TodoList />
    </>
  );
