import React from 'react';
import ellipsis from '../assets/icon-ellipsis.svg';

function Card({ color, imgSrc, alt, title, time, previous, timeframe }) {
  return (
    <div className={' rounded-xl mb-5 relative ' + color}>
      <div className='h-10 relative overflow-hidden'>
        <img src={imgSrc} alt={alt} className='absolute right-5 -top-3 ' />
      </div>

      <div className='bg-navy-900 rounded-xl p-5'>
        <div className='flex justify-between items-center text-navy-200'>
          <p className='font-bold'>{title}</p>
          <img src={ellipsis} alt='Ellipsis icon' />
        </div>
        <div className='flex justify-between mt-2'>
          <p className='text-navy-200 text-4xl'>{time}hrs</p>
          <p className='self-end text-sm'>{timeframe} - {previous}hrs</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
