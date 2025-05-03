import React from 'react';
import jeremy from '../assets/image-jeremy.png';

function Profile({ onClick, active }) {
  return (
    <article className='bg-navy-900 rounded-xl mb-7'>
      <div className='bg-purple-600 rounded-xl flex p-6'>
        <img
          src={jeremy}
          alt='jeremy profile pic'
          width={55}
          className='border-2 border-white rounded-full mr-4'
        />
        <div>
          <p className='text-purple-500 text-sm'>Report for</p>
          <h1 className='text-navy-200 text-xl'>Jeremy Robson</h1>
        </div>
      </div>
      <div className='flex justify-around p-5'>
        <button
          type='button'
          value={'daily'}
          onClick={onClick}
          className={`${
            active === 'daily' ? 'text-navy-200' : ''
          } hover:cursor-pointer`}
        >
          Daily
        </button>
        <button
          type='button'
          className={`${
            active === 'weekly' ? 'text-navy-200' : ''
          } hover:cursor-pointer`}
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
          } hover:cursor-pointer`}
        >
          Monthly
        </button>
      </div>
    </article>
  );
}

export default Profile;
