import {useState} from "preact/compat";
import {useStore} from "../store";

export const TodoForm = () => {
  const { addTodo } = useStore();
  const [todo, setTodo] = useState('');

  return (
    <form>
      <input type="text" onChange={({ target: { value }}) => setTodo(value)} value={todo} />
      <button onClick={() => { addTodo(todo); setTodo('') }}>Add todo</button>
    </form>
  )
}
