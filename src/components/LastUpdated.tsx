import { observer } from 'mobx-react-lite';
import { counterStore } from '../state/counter/counter.store';

const LastUpdated = observer(() => {
  return <div>Last updated by: {counterStore.lastUpdatedBy ?? '-'}</div>;
});

export default LastUpdated;
