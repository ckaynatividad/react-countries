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
      setFlags(data);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      {flags.map((flag) => {
        return <FlagsCard key ={flag.name} {...flag} />;
      })}
    </div>
  );
}

export default App;
