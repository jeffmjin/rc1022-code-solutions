import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function Pokemon(props) {
  const list = pokedex.map((e) =>
    <li key={e.number}>{e.name}</li>
  );
  return (
    <ul>{list}</ul>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Pokemon />);
