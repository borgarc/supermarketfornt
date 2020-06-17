<template>
  <table id="product-list">
    <tr>
      <th>Nombre del juego</th>
      <th>Precio</th>
    </tr>
    <tr v-for="product in products" v-bind:key="product.id">
      <th>{{ product.name }}</th>
      <th>{{ product.price }}</th>
    </tr>
  </table>
</template>

<script>
import { getProducts } from '../communications/api';

export default {
  name: 'ProductList',
  data() {
    return {
      products: [],
    }
  },
  created () {
    getProducts().then(response => {
      this.products = response.data;
    });
  }

}
</script>

<style>
  table, th, td {
    border: 1px solid black;
  }
</style>