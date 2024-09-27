import React from 'react';
import Header from './components/header/Header';
import Venue from './components/venue/Venue';
import MainImages from './components/imagebox/MainImages';

const App = () => {
  return (
    <div className='relative  bg-bg-pattern  '>
      {/* Black gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>
      {/* Main content (Header and Venue) */}
      <div className='relative z-10'>
        <Header />
        <Venue />
        <MainImages />
      </div>
    </div>
  );
};

export default App;
