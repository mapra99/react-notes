import React, { useState, useEffect } from 'react';
import '../assets/styles/containers/App.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const App = () => {
  const [videos, setVideos] = useState({mylist: [], trends: [], originals: []});

  useEffect(() => {
    fetch('http://localhost:3000/initialState')
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <div className='app'>
      <Header />
      <Search />
      {videos.trends.length > 0 && (
        <Category title='Tendencias'>
          <Carousel>
            {videos.trends.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Category>
      )}

      {videos.originals.length > 0 && (
        <Category title='Originales de Platzi Video'>
          <Carousel>
            {videos.originals.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Category>
      )}
      <Footer />
    </div>
  );
};

export default App;
