import React from 'react';
import styled from 'styled-components';
import Frame from './Frame';

const V = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding-left: 50px;
`;

const Video = ({ frames }) => {
  return (
    <V>
      {frames.map((frame) => (
        <Frame frame={frame} />
      ))}
    </V>
  );
};

export default Video;
