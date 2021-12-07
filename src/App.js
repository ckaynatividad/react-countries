import React from 'react';
import { useState, useEffect } from 'react';
import { getFlags } from './services/flags';
import FlagsCard from './components/FlagCard';
import './App.css';

function App() {
  const [flags, setFlags] = useState([]);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFlags();
      console.log(data);
      setFlags(data);
    };
    fetchData();
  }, []);
  const filterFlags = () => {
    return flags.filter((flag) => flag.name.includes(query) && (flag.sort === sort || sort === 'all'));
  };

  return (
    <section className="App">
      <h1>Countries</h1>
      <input type="text" value={query} onChange={(e) => { setQuery(e.target.value);
      }} />
      <select value ={sort} onChange={e=>setSort(e.target.value)}>
        <option value="all">All</option>
        <option value="name">Name</option>
      </select>
      {filterFlags().map((flag) => {
        return <FlagsCard key={flag.id} {...flag} />;
      })}
    </section>
  );
}

export default App;
