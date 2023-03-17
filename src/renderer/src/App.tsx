import { useState } from 'react';
import AppContainer from './components/AppContainer';
import AudioPlayer from './components/AudioPlayer';
import Navbar from './components/Navbar';
import StationContext from './utils/stationContext';
import AudioContext from './utils/audioContext';
import { Howl } from 'howler';

import radioStations from './assets/RadioSrc.json';
import { messageDialog } from './utils/dialog';

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
    html5: true,
    onloaderror: () => {
      audio.once('loaderror', () => {
        messageDialog({
          type: 'error',
          title: 'Loading error',
          message: 'Something went wrong while loading the audio'
        });
        audio.stop();
      });
    },
    onplayerror: () => {
      audio.once('playerror', () => {
        messageDialog({
          type: 'error',
          title: 'Play error',
          message: 'Something went wrong while playing the audio'
        });
        audio.stop();
      });
    }
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
