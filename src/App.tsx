import { defineComponent } from "vue";
import { Counter } from "./components";

const App = defineComponent({
  render() {
    return <Counter count={50} />;
  },
});

export default App;
