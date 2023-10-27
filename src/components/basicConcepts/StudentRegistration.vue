<template>
  <div class="card m-3">
    <h5 class="card-header">Registration Form</h5>
    <div class="card-body">
      <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
        <div class="form-row">
          <div class="form-group col-5">
            <label>Name</label>
            <Field
              v-model="students.name"
              name="name"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.name }"
            />
            <div class="invalid-feedback">{{ errors.name }}</div>
          </div>

          <div class="form-group col-5">
            <label>Age</label>
            <Field
              v-model="students.age"
              name="age"
              type="number"
              class="form-control"
              :class="{ 'is-invalid': errors.age }"
            />
            <div class="invalid-feedback">{{ errors.age }}</div>
          </div>

          <div class="form-group col-5">
            <label>Contact Number</label>
            <Field
              v-model="students.contectNo"
              name="contact"
              type="number"
              class="form-control"
              :class="{ 'is-invalid': errors.contact }"
            />
            <div class="invalid-feedback">{{ errors.contact }}</div>
          </div>

          <div class="form-group col-5">
            <label>Address</label>
            <Field
              v-model="students.address"
              name="address"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.address }"
            />
            <div class="invalid-feedback">{{ errors.address }}</div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col">
            <label>Country</label>

            <Field
              name="country"
              as="select"
              v-model="students.countryId"
              v-on:change="onChangeCountry()"
              class="form-control"
              :class="{ 'is-invalid': errors.country }"
            >
              <option value="">Select a Country</option>
              <option
                v-for="(country, index) in listCountry"
                :value="country.id"
                :key="index"
              >
                {{ country.name }}
              </option>
            </Field>
            <div class="invalid-feedback">{{ errors.country }}</div>
          </div>

          <div class="form-group col">
            <label>State</label>

            <Field
              name="state"
              as="select"
              :disabled="listState.length == 0"
              v-model="students.stateId"
              v-on:change="onChangeState(stateId)"
              class="form-control"
              :class="{ 'is-invalid': errors.state }"
            >
              <option value="">Select a State</option>
              <option
                v-for="(state, index) in listState"
                :key="index"
                :value="state.id"
              >
                {{ state.name }}
              </option>
            </Field>

            <div class="invalid-feedback">{{ errors.state }}</div>
          </div>

          <div class="form-group col">
            <label>City</label>

            <Field
              name="city"
              as="select"
              :disabled="listCities.length == 0"
              v-model="students.cityId"
              class="form-control"
              :class="{ 'is-invalid': errors.city }"
            >
              <option value="">Select a City</option>
              <option
                v-for="(city, index) in listCities"
                :key="index"
                :value="city.id"
              >
                {{ city.name }}
              </option>
            </Field>

            <div class="invalid-feedback">{{ errors.city }}</div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col">
            <label>Created On</label>
            <Field
              v-model="students.createdOn"
              name="createdOn"
              type="date"
              class="form-control"
              :class="{ 'is-invalid': errors.createdOn }"
            />
            <div class="invalid-feedback">{{ errors.createdOn }}</div>
          </div>
          <div class="form-group col">
            <label>Email</label>
            <Field
              v-model="students.email"
              name="email"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.email }"
            />
            <div class="invalid-feedback">{{ errors.email }}</div>
          </div>
        </div>

        <div class="form-row">
          <label>Gender</label><br />
          <div class="form-group">
            <div class="custom-control custom-radio custom-control-inline">
              <Field
                v-model="students.gender"
                name="gender"
                type="radio"
                v-bind:value="1"
                id="customRadioInline1"
                class="custom-control-input"
                :class="{ 'is-invalid': errors.gender }"
                checked="checked"
              />
              <label class="custom-control-label" for="customRadioInline1"
                >Male</label
              >
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <Field
                v-model="students.gender"
                name="gender"
                type="radio"
                v-bind:value="2"
                id="customRadioInline2"
                class="custom-control-input"
                :class="{ 'is-invalid': errors.gender }"
              />
              <br />
              <br />
              <label class="custom-control-label" for="customRadioInline2"
                >Female</label
              >
              <span class="invalid-feedback">{{ errors.gender }}</span>
            </div>
          </div>

          <!-- <div class="form-group col">
              <label>Picture</label><br />
              <Field
                v-model="students.picture"
                name="picture"
                type="file"
                class="form-control"
                :class="{ 'is-invalid': errors.picture }"
                @change="handleChange"
                @blur="handleBlur"
              />
  
              <div class="invalid-feedback">{{ errors.picture }}</div>
            </div> -->
        </div>

        <div class="form-group form-check">
          <Field
            name="subscribe"
            v-model="students.subscribe"
            type="checkbox"
            id="subscribe"
            v-bind:value="true"
            class="form-check-input"
            :class="{ 'is-invalid': errors.subscribe }"
          />
          <label for="subscribe" class="form-check-label">Subscribe</label>
          <div class="invalid-feedback">{{ errors.subscribe }}</div>
        </div>

        <div class="form-group">
          <button type="submit" class="btn btn-primary mr-1">Register</button>
          <button type="reset" class="btn btn-secondary">Reset</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import axios from "axios";

export default {
  name: "RegistrationForm",
  components: {
    Form,
    Field,
  },

  data() {
    const schema = Yup.object().shape({
      name: Yup.string().required("First Name is required"),
      address: Yup.string().required("Last name is required"),
      createdOn: Yup.string()
        .required("Date of Birth is required")
        .matches(
          /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
          "Date of Birth must be a valid date in the format YYYY-MM-DD"
        ),
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),

      age: Yup.number().required("age is required"),
      contact: Yup.number().required("contact is required"),
      country: Yup.string().nullable().required("Please Select One Country"),
      state: Yup.string().nullable().required("Please Select One State"),
      city: Yup.string().required("city is required"),
      gender: Yup.string().required("Gender is required"),
      subscribe: Yup.string().required("Accept Ts & Cs is required"),
      // picture: Yup.mixed().required("File is required"),
    });

    return {
      schema,
      listCountry: [],
      listState: [],
      listCities: [],

      students: {
        name: "",
        address: "",
        createdOn: 0,
        email: "",
        age: 0,
        contectNo: "",
        gender: "",
        subscribe: "",
        picture: "",
        countryId: "",
        stateId: "",
        cityId: "",
      },
    };
  },

  created() {
    debugger; // eslint-disable-line
    this.getCountry();
  },

  methods: {
    async getCountry() {
      debugger; // eslint-disable-line
      try {
        const country = await axios.get(
          "https://localhost:7290/api/MultipleDropDown/Country"
        );
        this.listCountry = country.data;
        console.log("country", this.listCountry);
      } catch (e) {
        console.log(e);
      }
    },

    async onChangeCountry() {
      try {
        debugger; // eslint-disable-line
        const states = await axios.get(
          `https://localhost:7290/api/MultipleDropDown/State?countryId=${this.students.countryId}`
        );

        console.log(states);
        this.listState = states.data;
        console.log("states", this.listState);
      } catch (e) {
        console.log(e);
      }
    },

    async onChangeState() {
      try {
        debugger; // eslint-disable-line
        const cities = await axios.get(
          `https://localhost:7290/api/MultipleDropDown/City?stateId=${this.students.stateId}`
        );
        debugger; // eslint-disable-line
        this.listCities = cities.data;
        console.log("cities", cities);
      } catch (e) {
        console.log(e);
      }
    },

    onSubmit() {
      debugger; // eslint-disable-line
      // display form values on success

      alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.students, null, 4));
      console.log("students", this.students);
      // alert("SUCCESS!! :-)\n\n" + JSON.stringify(, null, 4));

      axios.post(`https://localhost:7290/api/student`, this.students).then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};
</script>
