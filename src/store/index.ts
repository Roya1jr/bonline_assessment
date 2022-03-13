import * as data from "@/assets/Data.json";
import { defineStore } from "pinia";

export const dataStore = defineStore("main", {
  state: () => ({
    data,
  }),
  getters: {
    getData: (state) => {
      {
        state.data;
      }
    },
  },
});
