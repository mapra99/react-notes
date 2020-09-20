import React from 'react';
import '../assets/styles/containers/App.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const App = () => (
  <div className='app'>
    <Header />
    <Search />
    <Category>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Category>
    <Category>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Category>
    <Category>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Category>
    <Footer />
  </div>
);

export default App;
