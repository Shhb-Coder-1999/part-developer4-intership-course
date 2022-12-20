import { defineStore, acceptHMRUpdate } from "pinia";
import axios from "axios";

export const useStore = defineStore({
  id: "store",
  state: () => ({}),
  getters: {},
  actions: {
    login(username, password) {
      console.log("login");
      axios
        .post("https://reqres.in/api/login", {
          email: username,
          password: password,
        })
        .then(function (response) {
          localStorage.setItem("storedToken", response.data.token);
          alert("login is ok");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
