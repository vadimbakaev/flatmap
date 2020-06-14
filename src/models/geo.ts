export interface Geo<T> {
  features: Feature<T>[];
  type: string;
}

export interface Feature<T> {
  geometry: Geometry;
  type: string;
  properties: T;
}

export interface Geometry {
  coordinates: number[];
  type: string;
}
