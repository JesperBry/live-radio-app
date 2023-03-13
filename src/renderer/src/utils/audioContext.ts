import { Howl } from 'howler';
import { createContext } from 'react';

const AudioContext = createContext<Howl>({} as Howl);

export default AudioContext;
