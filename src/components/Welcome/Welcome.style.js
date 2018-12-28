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


export const Container = styled.div`
  position: relative;
  text-align: center;
  transition: all 100ms ease;
  ${media.lessThan('540px')`
    top: 30px;
    text-align: left;
    padding-left: 30px;
    z-index: 2;
  `}
`;

export const Subtext = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 5px auto 0 auto;
  width: auto;
  ${media.lessThan('540px')`
    justify-content: flex-start;
  `}
`;

export const Header = styled.h1`
  position: relative
  color: rgba(225, 225, 225, .9);
  font-size: 1.5rem;
  margin: 0;
  line-height: 1rem;
  font-weight: 400;
  margin: 0;
  padding-top: 30px;
`;

export const Link = styled.a`
  position: relative;
  color: #d7e9f3;
  font-size: .8rem;
  text-decoration: none;
  outline: none;
  font-weight: 400;
  margin-top: 2px;
`;

