import { observer } from 'mobx-react-lite';
import { counterStore } from '../state/counter/counter.store';
import type { ChangeEvent } from 'react';

const StepInput = observer(() => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) counterStore.setStep(value);
  };

  return <input type="number" value={counterStore.step} onChange={handleChange} />;
});

export default StepInput;
