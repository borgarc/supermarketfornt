import Vue from 'vue';

export function getProducts() {
  return Vue.http.get('products/');
}
