import { defineStore } from "pinia";
import axios from "axios";


const baseUrl = process.env.VUE_APP_MY_ENV_VARIABLE;

export const useUsersStore = defineStore({
  id: "users",
  state: () => ({
    users: {},
    user: {},
  }),


  
  actions: {
    async getAll() {
      debugger; // eslint-disable-line

      this.users = { loading: true };
      try {
        const response = await axios.get(baseUrl);
        this.users = response.data;
      } catch (error) {
        this.users = { error };
      }
    },



    async save(user) {
      debugger; // eslint-disable-line
      try {
        await axios
          .post(`${baseUrl}`, user)
          .then((response) => {
            console.log(response.data);
            this.users = response.data;
          })
          .catch((error) => {
            if (error.response) {
              console.log(error.response);
              console.log("server responded");
            }
          });
      } catch (error) {
        console.log(error);
      }
    },



    async getById(id) {
      debugger; // eslint-disable-line
      this.user = { loading: true };
      try {
        const response = await axios.get(`${baseUrl}/getPatient?id=${id}`);
        this.user = response.data;
      } catch (error) {
        this.user = { error };
      }
    },



    async update(updateUser) {
      debugger; // eslint-disable-line
      try {
        const response = await axios.put(
          `${baseUrl}/updatePatientDetails`,
          updateUser
        );
        this.users = response.data;
      } catch (error) {
        console.log(error);
      }
    },


    async delete(id) {
      debugger; // eslint-disable-line
      this.users.find((x) => x.id === id).isDeleting = true;
      await axios.delete(`${baseUrl}/${id}`);
      this.users = this.users.filter((x) => x.id !== id);
    },
  },
});
