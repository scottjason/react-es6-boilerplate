import React from 'react';
import {Img} from './Image.style';
import LazyLoad from 'react-lazyload';

const Image = ({ imageUrl }) => {
  return(
    <LazyLoad offset={100}>
      <Img src={imageUrl} />
    </LazyLoad>
  )
}

export default Image;
