import React from 'react';
import Image from '../Image/Image';
import { Grid, GridWrap, Container } from './Gallery.style';

const Gallery = ({ imageUrls }) => {
  return(
    <Container>
        <GridWrap>
          <Grid>
          {imageUrls.map((imageUrl, i) => {
            return( 
              <Image
                key={i}
                imageUrl={imageUrl} />
            )
          })}
          </Grid>
        </GridWrap>
    </Container>
  )
}


export default Gallery;
