<template>
  <h1 class="label-title">Cálculo do IMC</h1>
  <h2 class="label-subtitle">
    Digite o seu peso e altura para calcularmos o IMC
  </h2>
  <div class="div-imc">
    <span class="p-float-label">
      <InputText
        id="input-weight"
        type="text"
        v-model="weight"
        :disabled="imc"
      />
      <label for="input-weight">Peso</label>
    </span>
  </div>
  <div class="div-imc">
    <span class="p-float-label">
      <InputText
        id="input-height"
        type="text"
        v-model="height"
        :disabled="imc"
      />
      <label for="input-height">Altura</label>
    </span>
  </div>

  <div class="div-imc">
    <ButtonText class="div-imc-button" label="Calcular" @click="calculate" />
    <ButtonText class="div-imc-button" label="Limpar" @click="clear" />
  </div>

  <div class="label-result" v-if="imc">
    <p>Seu IMC é: {{ imc }}</p>
    <p>Classificação do seu IMC é: {{ classification }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: null,
      weight: null,
      imc: null,
      classification: "",
    };
  },
  methods: {
    calculate: function () {
      if (this.height && this.weight) {
        this.imc = (this.weight / (this.height ^ 2)).toFixed(2);
        console.log(this.weight);
        console.log(this.height);
        console.log(this.imc);
        if (this.imc < 18.5) {
          this.classification = "Magreza";
        } else if (this.imc >= 18.5 && this.imc < 25) {
          this.classification = "Normal";
        } else if (this.imc >= 25 && this.imc < 30) {
          this.classification = "Sobrepeso";
        } else if (this.imc >= 40 && this.imc < 50) {
          this.classification = "Obesidade";
        } else {
          this.classification = "Obesidade Grave";
        }
      }
    },
    clear: function () {
      this.height = null;
      this.weight = null;
      this.imc = null;
      this.classification = "";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.div-imc {
  margin-top: 2rem;
}

.div-imc-button {
  margin-right: 1rem !important;
}

.label-title {
  font-size: 1.6rem;
}
.label-subtitle {
  font-size: 1.1rem;
}

.label-result {
  font-size: 1.5rem;
}
</style>
