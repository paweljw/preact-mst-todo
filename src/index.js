import { StoreProvider } from "./store";
import { render } from 'preact';

import { Todos } from "./pages/Todos";

const App = () => (
  <StoreProvider>
    <h1>Preact + MobX State Tree example</h1>
    <Todos />
  </StoreProvider>
)

render(<App />, document.getElementById('app'))
