// Created with JSON to TS VS Code extension
export interface CountryResponse {
  border: Border2;
  population: Population;
  flag: Flag;
}

interface Flag {
  error: boolean;
  msg: string;
  data: Data2;
}

interface Data2 {
  name: string;
  flag: string;
  iso2: string;
  iso3: string;
}

interface Population {
  error: boolean;
  msg: string;
  data: Data;
}

interface Data {
  country: string;
  code: string;
  iso3: string;
  populationCounts: PopulationCount[];
}

interface PopulationCount {
  year: number;
  value: number;
}

interface Border2 {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: Border[];
}

interface Border {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: null;
}
