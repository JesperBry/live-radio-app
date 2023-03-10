import { Dispatch, SetStateAction, useState } from 'react';
import Backward from '@renderer/assets/icons/Backward';
import Forward from '@renderer/assets/icons/Forward';
import Pause from '@renderer/assets/icons/Pause';
import Play from '@renderer/assets/icons/Play';

interface Props {
  audio: HTMLAudioElement;
  station: {
    station: number;
    setStation: Dispatch<SetStateAction<number>>;
  };
}

const AudioControls = ({ audio, station }: Props) => {
  const [isPlaying, setPlaying] = useState<boolean>(false);

  const handlePlayPause = () => {
    if (audio !== null) {
      if (audio?.paused) {
        audio.play();
        setPlaying(true);
      } else {
        audio.pause();
        setPlaying(false);
      }
    }
  };

  const nextStation = () => {
    setPlaying(false);
    station.setStation(station.station + 1);
  };

  const previousStation = () => {
    if (station.station > 0) {
      setPlaying(false);
      station.setStation(station.station - 1);
    }
  };

  return (
    <div className="flex p-8 space-x-8">
      <button
        onClick={() => previousStation()}
        className="transform active:scale-75 transition-transform"
      >
        <Backward size="1.5rem" className="text-neutral-50" />
      </button>
      <button
        onClick={() => handlePlayPause()}
        className="transform active:scale-75 transition-transform"
      >
        {!isPlaying ? (
          <Play size="2.5rem" className="text-neutral-50" />
        ) : (
          <Pause size="2.5rem" className="text-neutral-50" />
        )}
      </button>
      <button
        onClick={() => nextStation()}
        className="transform active:scale-75 transition-transform"
      >
        <Forward size="1.5rem" className="text-neutral-50" />
      </button>
    </div>
  );
};

export default AudioControls;
