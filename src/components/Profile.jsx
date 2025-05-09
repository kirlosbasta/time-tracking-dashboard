import React from 'react';
import jeremy from '../assets/image-jeremy.png';

function Profile({ onClick, active }) {
  return (
    <article className='bg-navy-900 rounded-xl md:row-span-2'>
      <div className='bg-purple-600 rounded-xl flex md:flex-col p-6'>
        <img
          src={jeremy}
          alt='jeremy profile pic'
          width={55}
          className='border-2 border-white rounded-full mr-4 md:w-[70px] md:mb-7'
        />
        <div className='md:pb-10'>
          <p className='text-purple-500 text-sm'>Report for</p>
          <h1 className='text-navy-200 text-xl md:text-4xl'>Jeremy Robson</h1>
        </div>
      </div>
      <div className='flex justify-around md:flex-col md:items-start md:justify-around p-5'>
        <button
          type='button'
          value={'daily'}
          onClick={onClick}
          className={`${
            active === 'daily' ? 'text-navy-200' : ''
          } hover:cursor-pointer hover:text-navy-200`}
        >
          Daily
        </button>
        <button
          type='button'
          className={`${
            active === 'weekly' ? 'text-navy-200' : ''
          } hover:cursor-pointer hover:text-navy-200`}
          value={'weekly'}
          onClick={onClick}
        >
          Weekly
        </button>
        <button
          type='button'
          value={'monthly'}
          onClick={onClick}
          className={`${
            active === 'monthly' ? 'text-navy-200' : ''
          } hover:cursor-pointer hover:text-navy-200`}
        >
          Monthly
        </button>
      </div>
    </article>
  );
}

export default Profile;
