import { observer } from 'mobx-react-lite';
import { counterStore } from '../state/counter/counter.store';

const CounterDisplay = observer(() => {
  return <div>{counterStore.count}</div>;
});

export default CounterDisplay;
