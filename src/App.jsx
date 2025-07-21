import Calculator from "./components/Calculator";
import Counter from "./components/Counter";
import FormValidation from "./components/FormValidation";
import Hiddentinput from "./components/Hiddentinput";
import Meals from "./components/Meals";
import Testinomials from "./components/testinomials";
import Todo from "./components/Todo";
import { ToggleBackgroundProvider } from "./components/ToggleBackgroundContext";
import ToggleBakground from "./components/ToggleBakground";

function App() {
  return (
    <div>
      {/* <Counter />
      <Todo /> */}
      {/* <Meals /> */}
      {/* <Calculator />
      <ToggleBackgroundProvider>
        <ToggleBakground />
      </ToggleBackgroundProvider>
      <Hiddentinput />
      <Testinomials /> */}
      <FormValidation />
    </div>
  );
}

export default App;
