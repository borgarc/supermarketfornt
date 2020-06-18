<template>
  <div>
    <select v-model="genreSelectedId">
        <option disabled value="">Seleciona filtro</option>
        <option v-for="genre in genres" :value="genre.id" :key="genre.id">{{genre.genre}}</option>
    </select>
    <button @click="filterByGenre">Filtrar</button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: false,
    },
    genres: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      genreSelectedId: 0,
    };
  },
  methods: {
    filterByGenre() {
      this.$emit('input', this.genreSelectedId);
    },
  },
}
</script>