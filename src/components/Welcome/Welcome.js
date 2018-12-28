import React from 'react';
import { Header, Subtext, Link, Container } from './Welcome.style';
import { Github } from 'styled-icons/boxicons-logos';
import Icon from '../Icon/Icon';

const repoLink = 'https://www.github.com/scottjason/react-es6-boilerplate';

const Welcome = () => (
  <Container>
    <Header>React Boilerplate</Header>
    <Subtext>
      <Link
        target={'_blank'}
        href={repoLink}
      >
        View Source Code
      </Link>
      <Icon Component={Github} />
    </Subtext>
  </Container>
)

export default Welcome;
