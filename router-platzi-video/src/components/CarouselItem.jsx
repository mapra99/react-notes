import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFavorite, removeFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, fromMyList } = props;

  const handleSetFavorite = () => {
    const { setFavorite } = props;

    setFavorite({
      id, cover, title, year, contentRating, duration,
    });
  };

  const handleRemoveFavorite = () => {
    const { removeFavorite } = props;

    removeFavorite(id);
  };

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img className='carousel-item__details--img' src={playIcon} alt='Play Icon' />
          {fromMyList ? (
            <img onClick={handleRemoveFavorite} className='carousel-item__details--img' src={removeIcon} alt='Remove Icon' />
          ) : (
            <img onClick={handleSetFavorite} className='carousel-item__details--img' src={plusIcon} alt='Plus Icon' />
          )}
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  removeFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
