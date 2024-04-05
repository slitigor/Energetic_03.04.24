import { create } from "zustand";
import { IDistrict } from "./types";
import { appDataBase } from "./helper";

interface DistrictStore {
  districtList: IDistrict[];
  getAll: () => Promise<void>;
  createDistrict: (district: IDistrict) => Promise<void>;
  updateDistrict: (name: string, district: IDistrict) => Promise<void>;
  deleteDistrict: (name: string) => Promise<void>;
}

export const useDistrictStore = create<DistrictStore>()((set, get) => ({
  districtList: [],
  getAll: async () => {
    try {
      const r = await appDataBase.get("district");
      if (r.status !== 200) throw new Error("Server Error!");
      set({
        districtList: r.data,
      });
    } catch (err) {
      console.log(err);
      // toast.error(err.message)
    }
  },
  createDistrict: async (district) => {
    const { districtList } = get();
    try {
      const r = await appDataBase.post("district", district);
      if (r.status !== 201 && r.status !== 200)
        throw new Error("Server Error!");
      set({
        districtList: [...districtList, r.data],
      });
    } catch (err) {
      console.log(err);
    }
  },
  updateDistrict: async (name, district) => {
    const { districtList } = get();
    try {
      const r = await appDataBase.put(`district/${name}`, district);
      if (r.status !== 200) throw new Error("Server Error!");
      set({
        districtList: districtList.map((district) =>
          district.name === name ? r.data : district
        ),
      });
    } catch (err) {
      console.log(err);
    }
  },
  deleteDistrict: async (name) => {
    const { districtList } = get();
    try {
      const r = await appDataBase.delete(`district/${name}`);
      if (r.status !== 200) throw new Error("Server Error!");
      set({
        districtList: districtList.filter((district) => district.name !== name),
      });
    } catch (err) {
      console.log(err);
    }
  },
}));
