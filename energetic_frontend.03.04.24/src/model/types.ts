export const BASE_URL = "http://localhost:8080/";

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
