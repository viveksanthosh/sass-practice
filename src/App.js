import './App.scss';

import React from 'react';

const Tab = ({ name }) => <a>
  <li>
    {name}
  </li>
</a>

const App = () => (
  <main>
    <nav>
      <ul>
        <Tab name='Home' />
        <Tab name='About' />
        <Tab name='Contact Us' />
      </ul>
    </nav>
  </main>
);

export default App;
