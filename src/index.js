import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import fetch from 'node-fetch';

async function getUser() {
  try {
    const response = await fetch('https://randomuser.me/api/');

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}

console.log(await getUser());


// import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

const root = createRoot(document.getElementById('root'));

root.render(<App />)

// If using React version lower than 18:
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

