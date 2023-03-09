import React from 'react';
import AppContainer from './components/AppContainer';
import AudioControls from './components/AudioControls';
import Navbar from './components/Navbar';
import useAudio from './hooks/useAudio';

import radioStations from './assets/RadioSrc.json';

const App = () => {
  const imgURL: string = new URL(`./assets/img/${'nrkMP3.webp'}`, import.meta.url).href;

  const audio = useAudio('https://lyd.nrk.no/nrk_radio_mp3_mp3_h', {
    volume: 1
  });

  return (
    <AppContainer imgSrc={imgURL}>
      <Navbar />
      <div className="flex justify-center items-center h-screen flex-col">
        <img className="w-60 h-auto rounded-md" src={imgURL} alt="nrkMP3" />
        <AudioControls audio={audio} />
      </div>
    </AppContainer>
  );
};

export default App;
