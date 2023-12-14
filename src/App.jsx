import Video from './components/Video';
import './index.css';

const w = 2; // width
const h = 2; // height
const l = 50; // length
const videofile = [];
const makeFrame = () => {
  const frame = [];
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const c = Math.floor(Math.random() * 2);
      frame.push({ x, y, c });
    }
  }
  return frame;
};

for (let frame = 0; frame < l; frame++) {
  videofile.push(makeFrame());
}

function App() {
  return <Video frames={videofile}></Video>;
}

export default App;
