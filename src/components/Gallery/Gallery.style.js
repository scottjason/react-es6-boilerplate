import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  position: relative;
  max-width: 80%;
  margin: 0 auto;
  background-color: black;
  z-index: 1;
  ${media.lessThan('540px')`
    // margin-left: 30px;
    padding-top: 30px;
  `}
`;

export const GridWrap = styled.div`
   position: relative;
   margin: auto;
   padding: 20px 0 30px 0;
   width: auto;
   height: auto;
`;

export const Grid = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 10px;
`;
