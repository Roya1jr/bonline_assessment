import * as data from "@/assets/Data.json";
import { defineStore } from "pinia";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  id: number;
}

export const dataStore = defineStore("main", {
  state: () => ({
    data,
    currentId: data[0].account_id,
    currentUser: data[0],
  }),
  getters: {
    getUsers: (state) => {
      let obj: User[] = [];
      state.data.forEach((element) => {
        obj.push({
          firstName: element.first_name,
          lastName: element.last_name,
          email: element.email_address,
          id: element.account_id,
        });
      });
      return obj;
    },
  },
  actions: {
    setCurrentId(id: number) {
      this.currentId = id;
    },
    setCurrentUser(id: number) {
      let obj = data.find((o) => o.account_id === id);
      Object.assign(this.currentUser, obj);
    },
  },
});
