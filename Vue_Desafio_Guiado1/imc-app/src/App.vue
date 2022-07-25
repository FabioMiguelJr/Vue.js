<template>
  <h1 class="label-title">Reais para Dólares</h1>
  <h2 class="label-subtitle">$</h2>
  <div class="justify">
    <div class="div-imc">
      <span class="p-float-label p-inputtext-lg">
        <InputText
          id="input-reais"
          type="text"
          v-model="real"
          :disabled="dollars"
          placeholder="Quantidade em Reais"
        />
      </span>
    </div>
    <div class="div-imc">
      <span class="p-float-label p-inputtext-lg">
        <InputText
          id="input-dollar"
          type="text"
          v-model="dollar"
          :disabled="dollars"
          placeholder="Cotação do Dólar"
        />
      </span>
    </div>
    <div class="div-imc1">
      <ButtonText class="div-imc-button1" label="Limpar" @click="clear" />
      <ButtonText class="div-imc-button2" label="Calcular" @click="calculate" />
    </div>
  </div>

  <div class="label-result" v-if="dollars">
    <p>
      Com {{ real }} reais é possível comprar {{ dollars }} dólares a
      {{ dollar }} cada.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      real: null,
      dollar: null,
      dollars: null,
    };
  },
  methods: {
    calculate: function () {
      if (this.real && this.dollar) {
        this.dollars = (this.real / this.dollar).toFixed(2);
      }
    },
    clear: function () {
      this.real = null;
      this.dollar = null;
      this.dollars = null;
      this.classification = "";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.justify {
  text-align: center;
}

.div-imc {
  margin-top: 2rem;
}

.div-imc1 {
  margin-top: 2rem;
}

.div-imc-button1,
.div-imc-button2 {
  height: auto;
  width: 6.8rem;
}

.div-imc-button1 {
  margin-right: 1rem !important;
}

.div-imc-button2 {
  margin-left: 1rem !important;
}

.label-title {
  font-size: 1rem;
  background-color: lightgray;
  margin: 0;
  padding: 1.5rem;
}
.label-subtitle {
  font-size: 4rem;
  text-align: center;
}

.label-result {
  font-size: 1.5rem;
  text-align: center;
}
</style>
