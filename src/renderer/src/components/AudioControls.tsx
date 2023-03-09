import { useState } from 'react';
import Backward from '@renderer/assets/icons/Backward';
import Forward from '@renderer/assets/icons/Forward';
import Pause from '@renderer/assets/icons/Pause';
import Play from '@renderer/assets/icons/Play';

interface Props {
  audio: HTMLAudioElement;
}

const AudioControls = ({ audio }: Props) => {
  const [isPlaying, setPlaying] = useState<boolean>(false);

  const handlePlayPause = () => {
    if (audio.paused) {
      audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="flex p-8 space-x-8">
      <button className="transform active:scale-75 transition-transform">
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
      <button className="transform active:scale-75 transition-transform">
        <Forward size="1.5rem" className="text-neutral-50" />
      </button>
    </div>
  );
};

export default AudioControls;
