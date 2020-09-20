import React from 'react';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/containers/App.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const API = 'http://localhost:3000/initialState';

const App = () => {
  const initialState = useInitialState(API);

  const renderCategorySection = (category) => (
    initialState[category].length > 0 && (
      <Category title='Tendencias'>
        <Carousel>
          {initialState[category].map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Category>
    )
  );

  return (
    <div className='app'>
      <Header />
      <Search />
      {renderCategorySection('mylist')}
      {renderCategorySection('trends')}
      {renderCategorySection('originals')}
      <Footer />
    </div>
  );
};

export default App;
