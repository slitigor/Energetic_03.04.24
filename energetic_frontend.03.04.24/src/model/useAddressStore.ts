import { create } from "zustand";
import { IAddress } from "./types";
import { appDataBase } from "./helper";

interface AddressStore {
  addressList: IAddress[];
  getAll: () => Promise<void>;
  createAddress: (address: IAddress) => Promise<void>;
  deleteAddress: (zip: string) => Promise<void>;
}

export const useAddressStore = create<AddressStore>()((set, get) => ({
  addressList: [],
  getAll: async () => {
    try {
      const r = await appDataBase.get("address");
      if (r.status !== 200) throw new Error("Server Error!");
      set({ addressList: r.data });
    } catch (err) {
      console.log(err);
    }
  },
  createAddress: async (address) => {
    const { addressList } = get();
    try {
      const r = await appDataBase.post("address", address);
      if (r.status !== 200 && r.status !== 201)
        throw new Error("Server Error!");
      set({ addressList: [...addressList, r.data] });
    } catch (err) {
      console.log(err);
    }
  },
  deleteAddress: async (zip) => {
    const { addressList } = get();
    try {
      const r = await appDataBase.delete(`address/${zip}`);
      if (r.status != 200) throw new Error("Server Error!");
      set({
        addressList: addressList.filter((address) => address.zip !== zip),
      });
    } catch (err) {
      console.log(err);
    }
  },
}));
