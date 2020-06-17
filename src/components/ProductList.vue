<template>
  <div>
    <table id="product-list">
      <tr>
        <th>Nombre del juego</th>
        <th>Precio</th>
        <th>Cambiar el precio</th>
      </tr>
      <template v-for="(product, index) in products">
        <ProductListItem v-model="products[index]" @setMessage="setMessage" :key="product.id" />
      </template>
    </table>
    <ProductListForm @create="onCreate"/>
    <p>{{message}}</p>
  </div>
</template>

<script>
import { getProducts } from '@/communications/api';
import ProductListForm from '@/components/ProductListForm';
import ProductListItem from '@/components/ProductListItem';

export default {
  name: 'ProductList',
  components: {
    ProductListItem,
    ProductListForm,
  },
  data() {
    return {
      products: [],
      message: '',
    }
  },
  created() {
    getProducts().then(response => {
      this.products = response.data;
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