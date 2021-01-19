<template>
  <div class="list">
    <div v-for="(item, i) in getUsers" :key="i" class="item">
      <ul>
        <li>Nome: {{ item.name }}</li>
        <li>Endereço: {{ item.address }}</li>
        <li>Telefone: {{ item.phone }}}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  created() {
    this.findUsers().then(() => {
      this.$vToastify.success(
        "Lista de clientes carregada com sucesso!",
        "Sucesso"
      );
    });
  },
  computed: {
    ...mapGetters("users", ["getUsers"])
  },
  methods: {
    ...mapActions("users", ["findUsers"])
  }
};
</script>

<style scoped>
.list {
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.item {
  background: #fff;
  border-radius: 10px;
  width: 400px;
  margin: 20px;
}
</style>
