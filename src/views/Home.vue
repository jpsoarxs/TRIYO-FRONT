<template>
  <div class="home">
    <section class="form">
      <div class="form-group">
        <label>Nome</label>
        <input
          v-model="sendData.name"
          type="text"
          placeholder="Ex.: João Pedro Soares"
        />
      </div>
      <div class="form-group">
        <label>Endereço</label>
        <input
          v-model="sendData.address"
          type="text"
          placeholder="Ex.: Rua Carvalho de Freitas, 255"
        />
      </div>
      <div class="form-group">
        <label>Telefone</label>
        <input
          v-model="sendData.phone"
          type="text"
          placeholder="Ex.: (11) 94002-2282"
          v-mask="['(##) ####-####', '(##) #####-####']"
        />
      </div>

      <hr />

      <p style="text-align: center;">ADICIONAR PARENTE</p>

      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label>Nome</label>
            <input
              v-model="parent.name"
              type="text"
              placeholder="Ex.: Lucas Soares"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label>Idade</label>
            <input v-model="parent.age" type="number" placeholder="Ex.: 11" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label>Parentesco</label>
            <select
              v-model="parent.type"
              style="-webkit-appearance: none; height: 39px;"
              name="type"
              id="type"
            >
              <option value="Esposa(o)">Esposa(o)</option>
              <option value="Filha(o)">Filha(o)</option>
            </select>
          </div>
        </div>
        <div class="col-md-4 add-button">
          <button @click="add()">ADICIONAR</button>
        </div>
      </div>
    </section>
    <div class="col-md-12">
      <button @click="save()" class="btn btn-success">SALVAR</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      sendData: {
        name: undefined,
        address: undefined,
        phone: undefined,
        dependent: []
      },

      parent: { name: undefined, age: undefined, type: "Esposa(o)" }
    };
  },
  methods: {
    ...mapActions("users", ["createUser"]),
    add() {
      if (this.parent.name === undefined || this.parent.name === "") {
        this.$vToastify.error("O nome do parente é obrigatorio!", "Ops...");
        return;
      }

      if (this.parent.age === undefined || this.parent.name === "") {
        this.$vToastify.error("A idade do parente é obrigatorio!", "Ops...");
        return;
      }

      this.parent.age = parseInt(this.parent.age);
      this.sendData.dependent.push(this.parent);
      this.parent = { name: undefined, age: undefined, type: "Esposa(o)" };

      this.$vToastify.success(
        "O parente foi adicionado com sucesso!",
        "Sucesso"
      );
    },
    save() {
      if (this.sendData.name === undefined || this.sendData.name === "") {
        this.$vToastify.error("O nome é obrigatorio!", "Ops...");
        return;
      }

      if (this.sendData.address === undefined || this.sendData.address === "") {
        this.$vToastify.error("O endereço é obrigatorio!", "Ops...");
        return;
      }

      if (this.sendData.phone === undefined || this.sendData.phote === "") {
        this.$vToastify.error("O telefone é obrigatorio!", "Ops...");
        return;
      }

      this.createUser(this.sendData)
        .then(() => {
          this.$vToastify.success(
            "O cliente foi cadastrado com sucesso!",
            "Sucesso"
          );

          this.sendData = {
            name: undefined,
            address: undefined,
            phone: undefined,
            dependent: []
          };
        })
        .catch(err => {
          this.$vToastify.error(err, "Ops...");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  background: #fff;
  max-width: 30%;
  max-height: 80%;

  border-radius: 10px;

  -webkit-box-shadow: -2px 2px 39px -4px rgba(0, 0, 0, 0.29);
  -moz-box-shadow: -2px 2px 39px -4px rgba(0, 0, 0, 0.29);
  box-shadow: -2px 2px 39px -4px rgba(0, 0, 0, 0.29);

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: auto;
}

@media only screen and (max-width: 600px) {
  .home {
    max-width: 80%;
    margin-bottom: 50px;
  }
}

@media only screen and (min-width: 600px) {
  .home {
    max-width: 80%;
  }
}

.form {
  width: 80%;
  margin-top: 50px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.col-md-4 {
  width: 33.33%;
}

.col-md-12 {
  width: 100%;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.form-group label {
  margin-bottom: 5px;
}

.form-group input,
select {
  padding: 10px;
}

.add-button {
  display: flex;
  align-items: center;
  margin-top: 11px;
}

.add-button button {
  width: 100%;
  height: 39px;
  border: none;
  color: #fff;
  background: rgb(231, 166, 26);
  cursor: pointer;
}

.btn {
  width: 100%;
  height: 50px;
  border: none;
  cursor: pointer;
}

.btn-success {
  background: #f29f0e;
  color: #fff;
}
</style>
