<template>
  <div>
    <input v-model="product.name" type="text" placeholder="Nombre del Juego"/>
    <input v-model="product.price" type="number" placeholder="Precio del Juego"/>
    <select v-model="product.genre">
      <option disabled value="">Seleciona genero</option>
      <option v-for="genre in genres" :value="genre.id" :key="genre.id">{{genre.genre}}</option>
    </select>
    <button @click="createGame">Crear</button>
  </div>
</template>

<script>
import { postProduct } from '@/communications/api';

export default {
  props: {
    genres: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      product: {
        name: null,
        price: null,
        genre: null,
      },
    };
  },
  methods: {
    createGame() {
      postProduct(this.product).then(response => {
        
        this.$emit('create', response.data);
        this.product.name = null;
        this.product.price = null;
        this.product.genre = null;
      });
    },
  },
}
</script>