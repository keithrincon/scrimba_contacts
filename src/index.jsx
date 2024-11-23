import { createRoot } from 'react-dom/client';
import './index.css';
import App from '../App';

const root = createRoot(document.getElementById('root'));

function Page() {
  return (
    <>
      <App />
    </>
  );
}

root.render(<Page />);
