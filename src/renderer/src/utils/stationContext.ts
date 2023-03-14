import { createContext } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StationContext = createContext({ station: 0, setStation: (_n: number) => {} });

export default StationContext;
