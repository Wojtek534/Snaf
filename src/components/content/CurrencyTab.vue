<template>
<section class="section--transparent">
    <table class="my-table">
      <thead class="my-table__header">
        <th>#</th>
      <th v-for ="(head, index) in dataCurrency.headers" :key="-index-1">
       {{head.text}}
      </th>
      </thead>
      <tbody class="my-table__body">
      <tr v-for="(data, index) in dataCurrency.data" :key="index+1">
        <td>{{index+1}}</td>
        <td>{{data.currency}}</td>
        <td>{{data.code}}</td>
        <td>{{data.mid}}</td>
      </tr>
    </tbody>
    <tfoot class="my-table__footer">

    </tfoot>
    </table>
    </section>
</template>
<script>
export default {
  props: {
    dataCurrency: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      search: ''
    };
  }
};
</script>
