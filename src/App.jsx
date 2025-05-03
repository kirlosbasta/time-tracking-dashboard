import React, { useState } from 'react';
import Profile from './components/Profile';
import Card from './components/Card';
import data from '../data.json';
import work from './assets/icon-work.svg';
import exercise from './assets/icon-exercise.svg';
import play from './assets/icon-play.svg';
import selfCare from './assets/icon-self-care.svg';
import social from './assets/icon-social.svg';
import study from './assets/icon-study.svg';

function App() {
  const [currentTimeframe, setCurrentTimeframe] = useState('weekly');
  const [lastTime, setLastTime] = useState('Last Week');

  function handleClick(e) {
    switch (e.target.value) {
      case 'daily': {
        setCurrentTimeframe('daily');
        setLastTime('Yesterday');
        break;
      }
      case 'weekly': {
        setCurrentTimeframe('weekly');
        setLastTime('Last Week');
        break;
      }
      case 'monthly': {
        setCurrentTimeframe('monthly');
        setLastTime('Last Month');
        break;
      }
    }
  }
  const colors = {
    Work: {
      color: 'bg-orange-300',
      imgSrc: work,
      alt: 'suitcase',
    },
    Play: {
      color: 'bg-blue-300',
      imgSrc: play,
      alt: 'play',
    },
    Study: {
      color: 'bg-pink-400',
      imgSrc: study,
      alt: 'book',
    },
    Exercise: {
      color: 'bg-green-400',
      imgSrc: exercise,
      alt: 'workout',
    },
    Social: {
      color: 'bg-purple-700',
      imgSrc: social,
      alt: 'chatting',
    },
    'Self Care': {
      color: 'bg-yellow-300',
      imgSrc: selfCare,
      alt: 'heart',
    },
  };

  return (
    <div className='p-10'>
      <Profile onClick={handleClick} active={currentTimeframe} />
      {data.map((item) => (
        <Card
          color={colors[item.title].color}
          imgSrc={colors[item.title].imgSrc}
          alt={colors[item.title].alt}
          title={item.title}
          time={item.timeframes[currentTimeframe].current}
          timeframe={lastTime}
          previous={item.timeframes[currentTimeframe].previous}
        />
      ))}
    </div>
  );
}

export default App;
