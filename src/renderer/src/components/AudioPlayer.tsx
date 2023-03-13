import { Dispatch, SetStateAction } from 'react';
import AudioControls from './AudioControls';

interface Props {
  img: string;
  stations: number;
  station: {
    station: number;
    setStation: Dispatch<SetStateAction<number>>;
  };
}

const AudioPlayer = ({ img, station, stations }: Props) => {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <img className="w-60 h-auto rounded-md bg-white" src={img} alt="nrkMP3" />
      <AudioControls station={station} stations={stations} />
    </div>
  );
};

export default AudioPlayer;
