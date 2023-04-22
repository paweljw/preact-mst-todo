import { types } from "mobx-state-tree";
import { createContext } from "preact";
import { useContext } from "preact/compat"; // preact/compat, not preact-compat!

const Todo = types.model("Todo", {
  task: types.string,
  done: false,
}).actions(self => {
  return {
    toggle() {
      self.done = !self.done
    }
  }
})

const RootStore = types.model("RootStore", {
  todos: types.array(Todo)
}).actions(self => {
  return {
    addTodo(task) {
      self.todos.push(
        Todo.create({task: task, done: false})
      )
    },
    deleteTodo(index) {
      self.todos.splice(index, 1)
    }
  }
})

const RootStoreContext = createContext();
export const store = RootStore.create({ todos: [] });
export const StoreProvider = ({ children }) => (
  <RootStoreContext.Provider value={store}>{children}</RootStoreContext.Provider>
)

export function useStore() {
  const store = useContext(RootStoreContext);
  if (!store) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
}
