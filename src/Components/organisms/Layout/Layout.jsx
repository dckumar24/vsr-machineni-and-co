import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
  max-width: 1200px;

  @media screen and (min-width: 768px) {
  }
`;
