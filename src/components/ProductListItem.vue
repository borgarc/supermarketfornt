<template>
  <tr>
    <th>{{ value.name }}</th>
    <th>{{ value.price }}</th>
    <th>
      <input type="number" v-model="valueData.price" placeholder="Nuevo precio"/>
      <button @click="changePrice">Cambiar</button>
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
    changePrice () {
      let data = {
        price: this.valueData.price,
      };
      patchProduct(this.valueData.id, data).then(response => {
        this.$emit('setMessage', 'Se cambia el precio');
        this.$emit('input', response.data);
      }).catch(() => {
        this.$emit('setMessage', 'No se cambia el precio');
      });
    },
  }
}
</script>