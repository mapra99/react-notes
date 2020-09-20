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
    <Category title='Mi lista'>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Category>
    <Category title='Tendencias'>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Category>
    <Category title='Originales de Platzi Video'>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Category>
    <Footer />
  </div>
);

export default App;
