import React from 'react';
import './FlagCard.css';

export default function FlagCard({ name, iso2 }) {
  return (
    <>
      <div>
        <h3>{name}</h3>
        <img src={`https://flagcdn.com/80x60/${iso2.toLowerCase()}.png`} />
      </div>
    </>
  );
}