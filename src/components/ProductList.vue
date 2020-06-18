<template>
  <div>
    <ProductListFilter v-model="genreSelectedId" :genres="genres" />
    <table id="product-list">
      <tr>
        <th>Nombre del juego</th>
        <th>Precio</th>
        <th>Genero</th>
        <th>Cambiar el precio</th>
        <th>Cambiar el genero</th>
      </tr>
      <template v-for="(product, index) in products">
        <ProductListItem v-model="products[index]" :genres="genres" @setMessage="setMessage" :key="product.id" />
      </template>
    </table>
    <ProductListForm :genres="genres" @create="onCreate"/>
    <p>{{message}}</p>
  </div>
</template>

<script>
import { getProducts, getGenres } from '@/communications/api';
import ProductListForm from '@/components/ProductListForm';
import ProductListItem from '@/components/ProductListItem';
import ProductListFilter from '@/components/ProductListFilter';

export default {
  name: 'ProductList',
  components: {
    ProductListItem,
    ProductListForm,
    ProductListFilter,
  },
  data() {
    return {
      products: [],
      genres: [],
      message: '',
      genreSelectedId: null,
    }
  },
  created() {
    Promise.all([
      getProducts(),
      getGenres()
    ]).then(([productResponse, genreResponse]) => {
      this.genres = genreResponse.data;
      this.products = productResponse.data;
    });
  },
  methods: {
    setMessage(message) {
      this.message = message;
    },
    onCreate(newProduct) {
      this.products.push(newProduct);
    },
  },
}
</script>

<style>
  table, th, td {
    border: 1px solid black;
  }
</style>