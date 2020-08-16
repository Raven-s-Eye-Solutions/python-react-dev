import React, { useEffect, useState } from 'react';

import Header from './Components/Header';

export const App = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    async function fetchTime() {
      const response = await fetch('/current-time');
      const data = await response.json();
      if (data.time) {
        const date = new Date();
        date.setTime(data.time * 1000);
        date.toUTCString();
        setTime(date);
      }
    }
    fetchTime();
  }, []);

  return (
    <div className='App'>
      <Header />
      <p className='pt-2 text-center'>{!time ? 'Loading...' : `Server time: ${time}`}</p>
    </div>
  );
};

export default App;
