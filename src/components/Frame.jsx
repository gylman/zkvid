import React from 'react';
import Pixel from './Pixel';
import styled from 'styled-components';

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
        console.log(pixel);
        return <Pixel on={pixel.c} />;
      })}
    </F>
  );
};

export default Frame;
