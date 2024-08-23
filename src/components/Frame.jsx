import React from 'react';
import Pixel from './Pixel';
import styled from 'styled-components';
import cuid from 'cuid';

const F = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 40px;
  height: 40px;
`;

const Frame = ({ frame }) => {
  return (
    <F>
      {frame.map((pixel) => {
        return <Pixel on={pixel.c} key={cuid()} />;
      })}
    </F>
  );
};

export default Frame;
