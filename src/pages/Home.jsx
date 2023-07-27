import React, { useState } from 'react';
import BoardPage from './BoardPage';
import HomeInput from '../components/HomeInput';

const Home = () => {
  return (
    <>
      <HomeInput />
      <BoardPage />
    </>
  );
};

export default Home;
