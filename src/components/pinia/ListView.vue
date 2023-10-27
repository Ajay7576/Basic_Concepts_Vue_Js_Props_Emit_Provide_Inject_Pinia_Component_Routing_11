
<template>
  <h1>Patients</h1>
  <div class="col-1">
    <router-link to="/users/add" class="btn btn-outline-info mb-2">
      Add User</router-link
    >
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <table class="table table-striped table-hover table-dark table-borderd">
          <thead>
            <tr>
              <th style="width: 30%">PatientName</th>
              <th style="width: 30%">PatientDescription</th>
              <th style="width: 30%">PatientAge</th>
              <th style="width: 30%">PatientAddress</th>
              <th style="width: 10%"></th>
            </tr>
          </thead>
          <tbody>
            <template v-if="users.length">
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.patientName }}</td>
                <td>{{ user.patientDescription }}</td>
                <td>{{ user.patientAge }}</td>
                <td>{{ user.patientAddress }}</td>

                <td style="white-space: nowrap">
                  <router-link
                    :to="`/users/edit/${user.id}`"
                    class="btn btn-sm btn-primary mr-1"
                    >Edit</router-link
                  >
                  &nbsp;
                  <button
                    @click="ondelete(user.id)"
                    class="btn btn-sm btn-danger btn-delete-user"
                    :disabled="user.isDeleting"
                  >
                    <span
                      v-if="user.isDeleting"
                      class="spinner-border spinner-border-sm"
                    ></span>
                    <span v-else>Delete</span>
                  </button>
                </td>
              </tr>
            </template>

            <tr v-if="users.loading">
              <td colspan="4" class="text-center">
                <span
                  class="spinner-border spinner-border-lg align-center"
                ></span>
              </td>
            </tr>

            <tr v-if="users.error">
              <td colspan="4">
                <div class="text-danger">
                  Error loading users: {{ users.error }}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
import { storeToRefs } from "pinia";
import { useUsersStore } from "../../stores/user.store.js";

export default {
  setup() {
    const usersStore = useUsersStore();
    const { users } = storeToRefs(usersStore);

    async function ondelete(id) {
      await usersStore.delete(id);
    }
    return {
      users,
      ondelete,
    };
  },

  created() {
    const usersStore = useUsersStore();
    this.users = usersStore.getAll();
  },
};
</script>
