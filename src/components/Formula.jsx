import React from 'react';

export default function Formula({ podaci, onChange }) {

  return (
    <div>
      <h3 className='text-center p-2'>
        Y = {podaci[0]} * X^3 + {podaci[1]} * X^2 + {podaci[2]} * X + {podaci[3]}
      </h3>
      <div className='d-flex justify-content-between align-items-center'>
        <Polje naziv='A' value={podaci[0]} onChange={onChange(0)} />
        <Polje naziv='B' value={podaci[1]} onChange={onChange(1)} />
        <Polje naziv='C' value={podaci[2]} onChange={onChange(2)} />
        <Polje naziv='D' value={podaci[3]} onChange={onChange(3)} />
      </div>
    </div>
  );
}

export function Polje({ naziv, value, onChange }) {
  return (
    <div className='d-flex align-items-center'>
      <label className='mr-4'>{naziv}</label>
      <input type="number" value={value} onChange={e => {
        const value = Number(e.target.value);

        onChange(value);
      }} />
    </div>
  )
}