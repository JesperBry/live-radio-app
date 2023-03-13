import { useState } from 'react';
import AppContainer from './components/AppContainer';
import AudioPlayer from './components/AudioPlayer';
import Navbar from './components/Navbar';
import StationContext from './utils/stationContext';
import AudioContext from './utils/audioContext';

import radioStations from './assets/RadioSrc.json';
import { Howl } from 'howler';

const App = () => {
  const [station, setStation] = useState<number>(0);
  const maxStations: number = radioStations.stations.length;

  const imgURL: string = new URL(
    `./assets/img/${radioStations?.stations[station].station_image}`,
    import.meta.url
  ).href;

  const audioSrc = radioStations?.stations[station].source;
  const stationName = radioStations?.stations[station].name;

  const audio: Howl = new Howl({
    src: [audioSrc],
    html5: true
  });

  return (
    <AudioContext.Provider value={audio}>
      <StationContext.Provider value={{ station, setStation }}>
        <AppContainer imgSrc={imgURL}>
          <Navbar />
          <AudioPlayer
            img={imgURL}
            stations={maxStations}
            station={{ station, setStation }}
            name={stationName}
          />
        </AppContainer>
      </StationContext.Provider>
    </AudioContext.Provider>
  );
};

export default App;
