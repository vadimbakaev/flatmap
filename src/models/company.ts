export interface Company {
  remote: boolean;
  industry: string;
  createdAt: Date;
  startup: boolean;
  office: Office;
  website: string;
  name: string;
  id: string;
  socials: Socials;
  addedBy: string;
  stack: string[];
}

export interface Office {
  address: string;
  coordinate: Coordinate;
}

export interface Socials {
  twitter?: string;
  gitlab?: string;
  github?: string;
  linkedin?: string;
  bitbucket?: string;
}

export interface Coordinate {
  lat: number;
  lon: number;
}
