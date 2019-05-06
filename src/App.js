import './App.scss';

import React from 'react';

const Tab = ({ name }) => <a>
  <li>
    {name}
  </li>
</a>

const App = () => (
  <>
    <header>
      <nav>
        <ul>
          <Tab name='Home' />
          <Tab name='About' />
          <Tab name='Contact Us' />
        </ul>
      </nav>
    </header>
    <main>
      <p className='smallText'>Small Text</p>
      <p className='mediumText'>Medium Text</p>
      <p className='bigText'>Big Text</p>
    </main>
  </>
);

export default App;
