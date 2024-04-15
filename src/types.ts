export type Earthquake = {
  type: string;
  properties: {
    mag: number;
    place: string;
    time: number;
    updated: number;
    tz: null;
    url: string;
    detail: string;
    felt: null;
    cdi: null;
    mmi: null;
    alert: null;
    status: string;
    tsunami: number;
    sig: number;
    net: string;
    code: string;
    ids: string;
    sources: string;
    types: string;
    nst: number;
    dmin: number;
    rms: number;
    gap: number;
    magType: string;
    title: string;
  };
  geometry: {
    type: string;
    coordinates: [number, number, number];
  };
  id: string;
};
