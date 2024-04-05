import { create } from "zustand";
import { iSubstation } from "./types";
import { appDataBase } from "./helper";

interface SubstationStore {
  substationList: iSubstation[];
  getAll: () => Promise<void>;
  createSubstation: (substation: iSubstation) => Promise<void>;
  updateSubstation: (name: string, substation: iSubstation) => Promise<void>;
  deleteSubstation: (name: string) => Promise<void>;
}

export const useSubstationStore = create<SubstationStore>()((set, get) => ({
  substationList: [],
  getAll: async () => {
    try {
      const r = await appDataBase("substation");
      if (r.status !== 200) throw new Error("Server Error!");
      set({
        substationList: r.data,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createSubstation: async (substation) => {
    const { substationList } = get();
    try {
      const r = await appDataBase.post("substation", substation);
      if (r.status !== 200) throw new Error("Server Error!");
      set({ substationList: [...substationList, r.data] });
    } catch (err) {
      console.log(err);
    }
  },
  updateSubstation: async (name, substation) => {
    const { substationList } = get();
    try {
      const r = await appDataBase.put(`substation/${name}`, substation);
      if (r.status !== 200) throw new Error("Server Error!");
      set({
        substationList: substationList.map((substation) =>
          substation.name === name ? r.data : substation
        ),
      });
    } catch (err) {
      console.log(err);
    }
  },
  deleteSubstation: async (name) => {
    const { substationList } = get();
    try {
      const r = await appDataBase.delete(`substation/${name}`);
      if (r.status !== 200) throw new Error("Server Error!");
      set({
        substationList: substationList.filter(
          (substation) => substation.name !== name
        ),
      });
    } catch (err) {
      console.log(err);
    }
  },
}));
