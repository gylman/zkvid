import React from 'react';
import styled from 'styled-components';

const P = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({ on }) => (on && 'black') || 'white'};
`;

const Pixel = ({ on }) => {
  return <P on={on} />;
};

export default Pixel;
