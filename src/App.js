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
    return flags.filter((flag) => flag.name.includes(query) && (flag.continent === sort || sort === 'all'));
  };

  return (
    <section className="App">
      <h1>Flags of the World</h1>
      <input type="text" value={query} onChange={(e) => { setQuery(e.target.value);
      }} />
      <select value ={sort} onChange={e=>setSort(e.target.value)}>
        <option value="all">All</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="Antarctica">Antarctica</option>
        <option value="South America">South America</option>
      </select>
      <div className="flags">
        {filterFlags().map((flag) => {
          return <FlagsCard key={flag.id} {...flag} />;
        })}
      </div>
    </section>
  );
}

export default App;
