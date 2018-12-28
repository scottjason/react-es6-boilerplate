import React from 'react';
import { Link, Img } from './Fork.style';

const imgSrc = 'https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png';
const repoLink = 'https://www.github.com/scottjason/react-es6-boilerplate';

const Fork = () => (
  <Link href={repoLink}>
    <Img
      src={imgSrc}
      alt='Fork me on GitHub'
    />
  </Link>
)

export default Fork;
