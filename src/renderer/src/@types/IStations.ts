export interface IStations {
  stations: Station[];
}

export interface Station {
  name: string;
  brand: string;
  source: string;
  enpoint: string;
  station_image: string;
}
