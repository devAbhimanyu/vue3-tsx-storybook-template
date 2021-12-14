import { defineComponent, ref, withModifiers } from "vue";
import style from "./Counter.module.css";
const Test = defineComponent({
  props: {
    count: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  setup(props) {
    const count = ref(props.count);

    const inc = () => {
      count.value++;
    };

    return () => (
      <section class={style.counter}>
        <p>{count.value}</p>
        <button onClick={withModifiers(inc, ["self"])}>Increment</button>
      </section>
    );
  },
});

export default Test;
