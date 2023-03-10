import { Dispatch, MutableRefObject, SetStateAction, useEffect, useRef } from 'react';
import AudioControls from './AudioControls';

interface Props {
  img: string;
  src: string;
  station: {
    station: number;
    setStation: Dispatch<SetStateAction<number>>;
  };
}

const AudioPlayer = ({ img, src, station }: Props) => {
  const audioRef = useRef<HTMLAudioElement>() as MutableRefObject<HTMLAudioElement>;
  const sourceRef = useRef<HTMLSourceElement>() as MutableRefObject<HTMLSourceElement>;

  useEffect(() => {
    if (audioRef?.current !== null && sourceRef?.current !== null) {
      sourceRef.current.src = src;
      audioRef.current.load();
    }
  }, [src, audioRef, sourceRef]);

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <img className="w-60 h-auto rounded-md" src={img} alt="nrkMP3" />
      <AudioControls audio={audioRef.current} station={station} />
      <audio id="audio" ref={audioRef} controls={false}>
        <source id="audioSource" ref={sourceRef} src={src} />
        Your browser does not support the audio format.
      </audio>
    </div>
  );
};

export default AudioPlayer;
