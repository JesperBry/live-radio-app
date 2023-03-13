import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import Backward from '@renderer/assets/icons/Backward';
import Forward from '@renderer/assets/icons/Forward';
import Pause from '@renderer/assets/icons/Pause';
import Play from '@renderer/assets/icons/Play';
import AudioContext from '@renderer/utils/audioContext';

interface Props {
  stations: number;
  station: {
    station: number;
    setStation: Dispatch<SetStateAction<number>>;
  };
}

const AudioControls = ({ station, stations }: Props) => {
  const [isPlaying, setPlaying] = useState<boolean>(false);
  const [disableNext, setDisableNext] = useState<boolean>(false);
  const [disablePrev, setDisablePrev] = useState<boolean>(false);
  const disableStyle = 'opacity-50 cursor-not-allowed';
  const audio = useContext(AudioContext);

  const handlePlayPause = () => {
    if (audio !== null) {
      if (!audio?.playing()) {
        audio.play();
        setPlaying(true);
      } else {
        audio.pause();
        setPlaying(false);
      }
    }
  };

  const nextStation = () => {
    if (station.station < stations - 1) {
      setPlaying(false);
      audio.pause();
      station.setStation(station.station + 1);
    }
  };

  const previousStation = () => {
    if (station.station > 0) {
      setPlaying(false);
      audio.pause();
      station.setStation(station.station - 1);
    }
  };

  useEffect(() => {
    checkDisable();
  });

  useEffect(() => {
    setPlaying(audio.playing());
  }, [audio]);

  const checkDisable = () => {
    if (station.station === stations - 1) {
      setDisableNext(true);
    } else if (station.station === 0) {
      setDisablePrev(true);
    } else {
      setDisableNext(false);
      setDisablePrev(false);
    }
  };

  return (
    <div className="flex p-8 space-x-8">
      <button
        onClick={() => previousStation()}
        className={`transform active:scale-75 transition-transform ${
          disablePrev ? disableStyle : ''
        }`}
        disabled={disablePrev}
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
        className={`transform active:scale-75 transition-transform ${
          disableNext ? disableStyle : ''
        }`}
        disabled={disableNext}
      >
        <Forward size="1.5rem" className="text-neutral-50" />
      </button>
    </div>
  );
};

export default AudioControls;
