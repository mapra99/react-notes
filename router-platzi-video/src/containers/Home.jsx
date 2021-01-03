import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/Home.scss';

const Home = ({ mylist, trends, originals }) => {
  return mylist.length === 0 && trends.length === 0 && originals.length === 0 ? <h1>Loading...</h1> : (
    <div className='Home'>
      <Search />
      {mylist.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {mylist.map(item => (
              <CarouselItem
                key={item.id}
                {...item}
                fromMyList
              />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carousel>
          {trends.map(item => (
            <CarouselItem
              key={item.id}
              {...item}
              fromMyList={false} />
          ))}
        </Carousel>
      </Categories>
      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {originals.map(item => (
            <CarouselItem
              key={item.id}
              {...item}
              fromMyList={false} />
          ))}
        </Carousel>
      </Categories>
    </div>
  );
};

const mapStateToProps = state => ({
  mylist: state.mylist,
  trends: state.trends,
  originals: state.originals,
});

export default connect(mapStateToProps, null)(Home);
