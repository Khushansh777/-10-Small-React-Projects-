import Calculator from "./components/Calculator";
import Counter from "./components/Counter";
import Meals from "./components/Meals";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <Counter />
      <Todo />
      {/* <Meals /> */}
      <Calculator />
    </div>
  );
}

export default App;
