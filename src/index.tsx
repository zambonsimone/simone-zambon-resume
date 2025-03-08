import ReactDOM from 'react-dom/client';

import { App } from './App';
import { initI18next } from './i18next/i18next.config';

function start() {
  initI18next()
  ReactDOM.createRoot(
    document.querySelector('#root')
  ).render(<App />)
}

start();


