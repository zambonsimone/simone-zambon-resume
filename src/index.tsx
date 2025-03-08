import ReactDOM from 'react-dom/client';

import { App } from './App';

function start() {
  ReactDOM.createRoot(
    document.querySelector('#root')
  ).render(<App />)
}

start();


