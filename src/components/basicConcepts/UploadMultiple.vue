<template>
  <div class="col-md-12">
    <DynamicNavbar />
  </div>
  <div>
    <br />
    <div class="container">
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <input
            type="file"
            @change="uploadFile"
            multiple
            class="form-control"
            required
          />
        </div>
        <br />
        <div class="form-group">
          <button class="btn btn-info btn-block btn-lg form-control text-white">
            UploadMultipleFiles
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DynamicNavbar from "../basicConcepts/DynamicNavbar.vue";

export default {
  name: "UploadMutipleFile",
  components: {
    DynamicNavbar,
  },

  data() {
    return {
      files: [],
    };
  },

  methods: {
    
    uploadFile(event) {
      this.files = event.target.files;
      console.log("Files", this.files);
    },

    async handleSubmit() {
      debugger; // eslint-disable-line

      const formData = new FormData();

      for (const i of Object.keys(this.files)) {
        formData.append("Files", this.files[i]);
      }

      await axios
        .post("https://localhost:7290/api/MultipleFile/FileUpload", formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });

      this.$router.push({ name: "/home" });
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
