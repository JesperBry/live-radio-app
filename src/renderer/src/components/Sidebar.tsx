import { MutableRefObject, useContext } from 'react';
import { useClickOutside } from '@renderer/hooks/useClickOutside';

import radioStations from '../assets/RadioSrc.json';
import StationContext from '@renderer/utils/stationContext';
import AudioContext from '@renderer/utils/audioContext';

interface Props {
  sidebar: {
    showSidebar: boolean;
    setShowSidebar: (b: boolean) => void;
  };
}

const Sidebar = ({ sidebar }: Props) => {
  const ref: MutableRefObject<any> = useClickOutside(() => sidebar.setShowSidebar(false));
  const { setStation } = useContext(StationContext);
  const audio = useContext(AudioContext);

  const handleOnClick = (index: number) => {
    audio.pause();
    setStation(index);
    sidebar.setShowSidebar(false);
  };

  return (
    <>
      <aside
        ref={ref}
        id="default-sidebar"
        className={`absolute inset-y-0 right-0 z-40 w-64 h-screen transition-transform ${
          sidebar.showSidebar ? 'translate-x-0' : 'translate-x-full'
        } `}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-10 overflow-y-auto bg-neutral-800">
          <ul className="space-y-1">
            {radioStations.stations.map((station, index) => {
              return (
                <li
                  onClick={() => {
                    handleOnClick(index);
                  }}
                  key={station.name}
                >
                  <a
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-neutral-50 rounded-lg hover:bg-neutral-700"
                  >
                    <span className="ml-3">{station.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
