import { useState } from 'react';
import AppContainer from './components/AppContainer';
import AudioPlayer from './components/AudioPlayer';
import Navbar from './components/Navbar';

import radioStations from './assets/RadioSrc.json';

const App = () => {
  const [station, setStation] = useState<number>(0);
  const maxStations: number = radioStations.stations.length;

  const imgURL: string = new URL(
    `./assets/img/${radioStations?.stations[station].station_image}`,
    import.meta.url
  ).href;

  const audioSrc = radioStations?.stations[station].source;

  return (
    <AppContainer imgSrc={imgURL}>
      <Navbar />
      <AudioPlayer
        img={imgURL}
        src={audioSrc}
        stations={maxStations}
        station={{ station, setStation }}
      />
    </AppContainer>
  );
};

export default App;
