import React, { useState } from 'react';

import Email from './Components/Email/index.js';
import Page from './Components/Page/index.js';

const App = () => {

  const [pageInterface, setPageInterface] = useState('');

  return (
    <div className='main'>
      <div className='template-select-container'>
        <span>Select Template</span>

        <select
          className='template-select'
          onChange={(e) => setPageInterface(e.target.value)}
        >
          <option selected disabled>Select Template</option>
          <option value="email">Email signature layout</option>
          <option value="page">Page layout</option>
        </select>
      </div>

      <div className='content'>
        {
          pageInterface == 'email' ?
            <Email />
            : pageInterface == 'page' ?
              <Page />
              : null
        }
      </div>
    </div>
  );
}

export default App;
