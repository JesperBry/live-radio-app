import { createContext } from 'react';

const StationContext = createContext({ station: 0, setStation: (n: number) => {} });

export default StationContext;
