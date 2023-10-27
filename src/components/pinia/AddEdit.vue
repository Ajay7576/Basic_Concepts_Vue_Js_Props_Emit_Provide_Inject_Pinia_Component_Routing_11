<template>
  <Model>
    <template v-slot:header>
      <h1>{{ title }}</h1>
    </template>
    <template v-slot:body>
      <div class="container">
        <div class="row">
          <div v-if="!(user?.loading || user?.error)">
            <Form
              @submit="onSubmit"
              :validation-schema="schema"
              :initial-values="user"
               v-slot="{ errors, isSubmitting }"
            >
              <div class="form-row">
                <div class="form-group col">
                  <label>Patient Name</label>
                  <Field
                    name="patientName"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.patientName }"
                  />
                  <div class="invalid-feedback">{{ errors.patientName }}</div>
                </div>
                <div class="form-group col">
                  <label>Patient Description</label>
                  <Field
                    name="patientDescription"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.patientDescription }"
                  />
                  <div class="invalid-feedback">
                    {{ errors.patientDescription }}
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col">
                  <label>Patient Age</label>
                  <Field
                    name="patientAge"
                    type="number"
                    class="form-control"
                    :class="{ 'is-invalid': errors.patientAge }"
                  />
                  <div class="invalid-feedback">{{ errors.patientAge }}</div>
                </div>

                <div class="form-group col">
                  <label>Patient Address</label>
                  <Field
                    name="patientAddress"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.patientAddress }"
                  />
                  <div class="invalid-feedback">
                    {{ errors.patientAddress }}
                  </div>
                </div>
              </div>

              <div class="form-group">
                <div class="row">
                  <div class="col-lg-6">
                    <button
                      class="btn btn-outline-primary"
                      :disabled="isSubmitting"
                    >
                      <span
                        v-show="isSubmitting"
                        class="spinner-border spinner-border-sm mr-1"
                      ></span>
                      Save
                    </button>
                  </div>

                  <div class="col-lg-6">
                    <button class="btn btn-outline-danger" type="reset">
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </template>
  </Model>

  <template v-if="user?.loading">
    <div class="text-center m-5">
      <span class="spinner-border spinner-border-lg align-center"></span>
    </div>
  </template>
  <template v-if="user?.error">
    <div class="text-center m-5">
      <div class="text-danger">Error loading user: {{ user.error }}</div>
    </div>
  </template>
</template>

<script>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useUsersStore } from "../../stores/user.store.js";
import router from "../../router";
import Model from "../basicConcepts/CustomModalPopUp.vue";

export default {
  name: "UserEdit",
  components: {
    Form,
    Field,
    Model,
  },

  setup() {
    const usersStore = useUsersStore();

    const route = useRoute();

    const id = route.params.id;

    let title = "Add User";
    let user = null;

    if (id) {
      // edit mode
      title = "Edit User";
      ({ user } = storeToRefs(usersStore));
      usersStore.getById(id);
    }

    const schema = Yup.object().shape({
      patientName: Yup.string().required("PatientName is required"),
      patientDescription: Yup.string().required(
        "PatientDescription is required"
      ),
      patientAge: Yup.string().required("PatientAge is required"),
      patientAddress: Yup.string().required("PatientAddress is required"),
    });

    async function onSubmit(values) {
      debugger; // eslint-disable-line

      try {
        let message;

        if (user) {
          await usersStore.update(values);
          message = "User updated";
        } else {
          await usersStore.save(values);
          message = "User added";
        }
        await router.push("/users");
        console.log(message);
      } catch (error) {
        console.log(error);
      }
    }

    return {
      schema,
      title,
      user,
      id,
      onSubmit,
    };
  },
};
</script>
