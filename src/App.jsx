import Calculator from "./components/Calculator";
import Counter from "./components/Counter";
import Meals from "./components/Meals";
import Todo from "./components/Todo";
import { ToggleBackgroundProvider } from "./components/ToggleBackgroundContext";
import ToggleBakground from "./components/ToggleBakground";

function App() {
  return (
    <div>
      <Counter />
      <Todo />
      {/* <Meals /> */}
      <Calculator />
      <ToggleBackgroundProvider>
        <ToggleBakground />
      </ToggleBackgroundProvider>
    </div>
  );
}

export default App;
