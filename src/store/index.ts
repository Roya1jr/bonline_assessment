import { default as data } from "@/assets/Data.json";
import { defineStore } from "pinia";

export const dataStore = defineStore("users", () => {
  let currentUser = data[0];
  let numberOfUsers = data.length;

  function setCurrentUser(id: number) {
    return data[id];
  }

  function printData() {
    console.log(data);
    console.log(currentUser);
    console.log(numberOfUsers);
  }

  function getData() {
    return data;
  }

  return {
    data,
    currentUser,
    numberOfUsers,
    setCurrentUser,
    getData,
    printData,
  };
});
