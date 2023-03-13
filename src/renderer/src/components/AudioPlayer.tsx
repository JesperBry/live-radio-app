import { Dispatch, SetStateAction } from 'react';
import AudioControls from './AudioControls';
import { Howl } from 'howler';

interface Props {
  img: string;
  src: string;
  stations: number;
  station: {
    station: number;
    setStation: Dispatch<SetStateAction<number>>;
  };
}

const AudioPlayer = ({ img, src, station, stations }: Props) => {
  const channel: Howl = new Howl({
    src: [src],
    html5: true
  });

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <img className="w-60 h-auto rounded-md bg-white" src={img} alt="nrkMP3" />
      <AudioControls audio={channel} station={station} stations={stations} />
    </div>
  );
};

export default AudioPlayer;
