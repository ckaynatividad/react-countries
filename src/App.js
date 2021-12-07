import React from 'react';
import { useState, useEffect } from 'react';
import { getFlags } from './services/flags';
import FlagsCard from './components/FlagCard';
import './App.css';

function App() {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFlags();
      console.log(data);
      setFlags(data);
    };
    fetchData();
  }, []);
  return (
    <section className="App">
      {flags.map((flag) => {
        return <FlagsCard key={flag.id} {...flag} />;
      })}
    </section>
  );
}

export default App;
