import { atom } from "recoil";

let datafromLocal = "";

if (localStorage.getItem("user")) {
  datafromLocal = JSON.parse(localStorage.getItem("user"));
}

export const allDataFromLocalStorage = atom({
  key: "allDataFromLocalStorage",
  default: [
    { name: "sandesh", email: "sandy@gmail.com", password: "sandesh123" },
    ...datafromLocal,
  ],
});

export const userProfile = atom({
  key: "userProfile",
  default: {},
});
