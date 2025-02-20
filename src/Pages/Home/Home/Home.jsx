import React from 'react';
import Banner from './Banner/Banner';
import Cover from '../Cover/Cover';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';

const Home = () => {
  return (
    <div>
     
      <Cover></Cover>
     <Banner></Banner>
     <PopularMenu></PopularMenu>
     <Featured></Featured>
    </div>
  );
};

export default Home;