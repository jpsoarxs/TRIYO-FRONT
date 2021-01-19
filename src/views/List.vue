<template>
  <div class="list">
    <div
      v-for="(item, i) in getUsers"
      :key="i"
      @click="show(item)"
      class="item"
    >
      <ul>
        <li>Código: {{ item._id }}</li>
        <li>Nome: {{ item.name }}</li>
        <li>Endereço: {{ item.address }}</li>
        <li>Telefone: {{ item.phone }}</li>
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
    ...mapActions("users", ["findUsers"]),
    show(item) {
      this.$swal(
        "PARENTES",
        `${
          item.dependent.length > 0
            ? `<table style="width:100%">
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>Parentesco</th>
            </tr>
          ${item.dependent.map(
            val =>
              `<tr>
                <td>${val.name}</td>
                <td>${val.age}</td>
                <td>${val.type}</td>
              </tr>`
          )}</table>`
            : "Nenhum parente encontrado"
        }`
      );
    }
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
  cursor: pointer;
}

.item:hover {
  transform: scale(1.05);
}
</style>
