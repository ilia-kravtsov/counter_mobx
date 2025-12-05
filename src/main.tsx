import { createRoot } from 'react-dom/client';
import App from './components/App';
import 'mobx-react-lite/batchingForReactDom';

createRoot(document.getElementById('root')!).render(<App />);
