import React from 'react';
import ellipsis from '../assets/icon-ellipsis.svg';

function Card({ color, imgSrc, alt, title, time, previous, timeframe }) {
  return (
    <div className={' rounded-xl ' + color}>
      <div className='h-10 relative overflow-hidden'>
        <img src={imgSrc} alt={alt} className='absolute right-5 -top-3 ' />
      </div>

      <div className='bg-navy-900 rounded-xl p-5 hover:brightness-150 hover:cursor-pointer'>
        <div className='flex justify-between items-center text-navy-200'>
          <p className='font-bold'>{title}</p>
          <button type='button'>
            <img src={ellipsis} alt='Ellipsis icon' />
          </button>
        </div>
        <div className='flex md:flex-col justify-between mt-2'>
          <p className='text-navy-200 text-4xl md:text-5xl md:mt-3 md:mb-1'>
            {time}hrs
          </p>
          <p className='self-end md:self-start text-sm'>
            {timeframe} - {previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
