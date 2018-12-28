import styled from 'styled-components';
import media from 'styled-media-query';

export const Img = styled.img`
  height: auto;
  object-fit: cover;
  width: 100%;
  min-height: 100px;
  max-height: 150px;
  border: 1px solid rgba(225, 225, 225, .4);
  transition: all ease 150ms;
  box-sizing: border-box;
  ${media.lessThan('medium')`
    max-height: 100px;
  `}
`;
