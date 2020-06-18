import Vue from 'vue';

export function getGenres() {
  return Vue.http.get('genres/');
}

export function getProducts(genre) {
  let url = 'products/';
  if (genre) {
    url += '?genre=' + genre;
  }
  return Vue.http.get(url);
}

export function patchProduct(id, data) {
  return Vue.http.patch('products/' + id + '/', data);
}

export function postProduct(data) {
  return Vue.http.post('products/', data);
}
