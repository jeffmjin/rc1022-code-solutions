import React from 'react';
import ReactDOM from 'react-dom/client';

const createElement = React.createElement('h1', null, 'Hello, React!');
console.log('createElement:', createElement);

const container = document.getElementById('root');
const createRoot = ReactDOM.createRoot(container);
createRoot.render(createElement);
