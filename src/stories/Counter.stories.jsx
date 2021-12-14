import { Counter } from "../components";

export default {
  title: "Example/Counter",
  component: Counter,
};
const Template = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Counter },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
  },
  render() {
    return <Counter count={10} />;
  },
  // Then, the spread values can be accessed directly in the template
});
export const TestComp = Template.bind({});
TestComp.args = {};
