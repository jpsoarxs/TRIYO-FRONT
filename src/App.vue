<template>
  <div id="app">
    <h1>TRIYO</h1>
    <p v-if="currentRouteName === 'Home'">CADASTRAR UM NOVO CLIENTE</p>
    <router-view />
    <footer>
      <router-link v-if="currentRouteName !== 'List'" to="/list">
        LISTA DE CLIENTES
      </router-link>
      <router-link v-if="currentRouteName !== 'Home'" to="/">
        VOLTAR
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background: rgb(242, 159, 14);
  background: linear-gradient(
    317deg,
    rgba(242, 159, 14, 1) 12%,
    rgba(242, 113, 14, 1) 100%
  );
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 50px;
  color: #fff;
  margin: 0;
}

p {
  color: #fff;
  margin: 0;
  margin-bottom: 40px;
}
</style>

<style>
body {
  margin: 0;
  padding: 0;
}
footer {
  display: flex;
  width: 40%;
  justify-content: center;
  color: #fff;
}

footer a {
  text-decoration: none;
  margin: 20px;
  color: #fff;
  margin-bottom: 50px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
