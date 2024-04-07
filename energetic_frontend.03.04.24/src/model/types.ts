export const BASE_URL = "http://localhost:8080/";

export type Id = string | number;

export interface IAddress {
  zip: string;
  city?: string;
  street?: string;
}

export interface IDistrict {
  name: string;
  description?: string;
  address?: IAddress;
}

export interface iSubstation {
  name: string;
  psSchema?: string;
  district?: IDistrict;
}

export type DistrictColumn = {
  id: Id;
  districTitle: string;
};
