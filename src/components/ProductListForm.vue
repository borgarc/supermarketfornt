<template>
  <div>
    <input v-model="product.name" type="text" placeholder="Nombre del Juego"/>
    <input v-model="product.price" type="number" placeholder="Precio del Juego"/>
    <button @click="createGame">Crear</button>
  </div>
</template>

<script>
import { postProduct } from '@/communications/api';

export default {
  data() {
    return {
      product: {
        name: null,
        price: null,
      },
    };
  },
  methods: {
    createGame() {
      postProduct(this.product).then(response => {
        this.$emit('create', response.data);
        this.product.name = null;
        this.product.price = null;
      });
    },
  },
}
</script>