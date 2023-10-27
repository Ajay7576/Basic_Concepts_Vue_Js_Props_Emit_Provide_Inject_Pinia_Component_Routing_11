<template>
  <div class="modal" v-if="modal">
    <header class="modal-header">
      <slot name="header"> Header! </slot>
      <button type="button" class="btn-close" @click="close">x</button>
    </header>

    <section class="modal-body">
      <slot name="body"> Body!</slot>
    </section>

    <footer class="modal-footer">
      <button type="button" class="btn-outline-primary" @click="close">
        Close Modal
      </button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "ModalV",
  data() {
    return {
      modal: true,
    };
  },
  methods: {
    close() {
      debugger; // eslint-disable-line
      this.modal = false;
      this.$router.push({ path: "/users" });
    },
  },
};
</script>

<style scoped>
.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px;
  margin-left: 290px;
  margin-top: 30px;
  height: 500px;
  width: 500px;
  justify-content: center;
}

.modal-header,
.modal-footer {
  padding: 8px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>
