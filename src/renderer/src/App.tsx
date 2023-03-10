import { useState } from 'react';
import AppContainer from './components/AppContainer';
import AudioPlayer from './components/AudioPlayer';
import Navbar from './components/Navbar';

const App = () => {
  const radioStations = {
    stations: [
      {
        name: 'NRK MP3',
        brand: 'NRK',
        source: 'https://lyd.nrk.no/nrk_radio_mp3_mp3_h',
        enpoint: 'nrk_radio_mp3_mp3_h',
        station_image: 'nrkMP3.webp'
      },
      {
        name: 'NRK Sport',
        brand: 'NRK',
        source: 'https://lyd.nrk.no/nrk_radio_sport_mp3_l',
        enpoint: 'nrk_radio_sport_mp3_l',
        station_image: 'nrkSport.webp'
      },
      {
        name: 'NRK P3',
        brand: 'NRK',
        source: 'https://lyd.nrk.no/nrk_radio_p3_mp3_h',
        enpoint: 'nrk_radio_p3_mp3_h',
        station_image: 'nrkP3.webp'
      }
    ]
  };

  const [station, setStation] = useState<number>(0);

  const imgURL: string = new URL(
    `./assets/img/${radioStations?.stations[station].station_image}`,
    import.meta.url
  ).href;

  const audioSrc = radioStations?.stations[station].source;

  return (
    <AppContainer imgSrc={imgURL}>
      <Navbar />
      <AudioPlayer img={imgURL} src={audioSrc} station={{ station, setStation }} />
    </AppContainer>
  );
};

export default App;
