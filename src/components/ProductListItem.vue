<template>
  <tr>
    <th>{{ value.name }}</th>
    <th>{{ value.price }}</th>
    <th>{{ gameGenre.genre }}</th>
    <th>
      <input type="number" v-model="valueData.price" placeholder="Nuevo precio"/>
      <button @click="changePrice">Cambiar</button>
    </th>
    <th>
      <select v-model="valueData.genre">
      <option disabled value="">Seleciona genero</option>
      <option v-for="genre in genres" :value="genre.id" :key="genre.id">{{genre.genre}}</option>
    </select>
    <button @click="changeGenre">Cambiar</button>
    </th>
  </tr>
</template>

<script>
import _ from 'lodash';
import { patchProduct } from '@/communications/api';

export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
    genres: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      valueData: {}
    };
  },
  created() {
    this.valueData = _.merge({}, this.value);
  },
  methods: {
    changePrice() {
      const data = {
        price: this.valueData.price,
      };
      this.patchProduct(data);
    },
    changeGenre() {
      const data = {
        genre: this.valueData.genre,
      }
      this.patchProduct(data);
    },
    patchProduct(data) {
      patchProduct(this.valueData.id, data).then(response => {
        this.$emit('setMessage', 'Se cambia el producto');
        this.$emit('input', response.data);
      }).catch(() => {
        this.$emit('setMessage', 'No se cambia el producto');
      });
    }
  },
  computed: {
    gameGenre() {
      return this.genres.find(genre => genre.id === this.value.genre);
    },
  },
}
</script>