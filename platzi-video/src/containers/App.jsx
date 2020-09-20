import React from 'react';
import '../assets/styles/containers/App.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const App = () => (
  <div className='app'>
    <Header />
    <Search />
    <Category>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Category>
  </div>
);

export default App;
