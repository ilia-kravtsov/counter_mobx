import { observer } from 'mobx-react-lite';
import { counterStore } from '../state/counter/counter.store';

const CounterControls = observer(() => (
  <div>
    <button onClick={() => counterStore.increment()}>Increment</button>
    <button onClick={() => counterStore.decrement()}>Decrement</button>
    <button onClick={() => counterStore.reset()}>Reset</button>
  </div>
));

export default CounterControls;
