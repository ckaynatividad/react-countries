import React from 'react';
import './FlagCard.css';

export default function FlagCard({ name, iso2 }) {
  return (
    <div>
      <><img src={`https://flagcdn.com/80x60/${iso2}.png`} /><h2>{name}</h2></>
    </div>
  );
}