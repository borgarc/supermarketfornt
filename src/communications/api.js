import Vue from 'vue';

export function getProducts() {
  return Vue.http.get('products/');
}

export function patchProduct(id, data) {
  return Vue.http.patch('products/' + id + '/', data);
}

export function postProduct(data) {
  return Vue.http.post('products/', data);
}
