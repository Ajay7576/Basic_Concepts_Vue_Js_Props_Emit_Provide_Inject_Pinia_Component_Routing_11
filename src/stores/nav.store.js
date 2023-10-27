import { defineStore } from "pinia";
import axios from "axios";
import routes from "../router";

const baseUrl = process.env.VUE_APP_MY_ENV_VARIABLE;

export const useNavStore = defineStore({
  id: "navbar",
  state: () => ({
    lists: [],
  }),

  getters: {
    getIsMatchRoute() {
      let linkItem = [];
      const results = routes.options.routes;

      this.lists.forEach((item) => {
        const results2 = results.filter((person) => person.name == item.name);
        if (results2.length > 0) {
          linkItem.push({
            path: `${item.name}`,
            name: item.name,
          });
        } else {
          linkItem.push({
            path: `${item.name}`,
            name: `${item.name}`,
            params: { name: item.name },
          });
        }
      });
      return linkItem;
    },
  },

  actions: {
    async getAll() {
      try {
        const response = await axios.get(`${baseUrl}/Navbaar`);
        this.lists = response.data;
      } catch (error) {
        this.lists = { error };
      }
    },
  },
});
