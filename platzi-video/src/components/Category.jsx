import React from 'react';
import '../assets/styles/components/Category.scss';

const Category = ({children}) => (
  <div className='category'>
    <h3 className='categories__title'>Mi lista</h3>
    {children}
  </div>
);

export default Category;
