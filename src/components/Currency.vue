<template>
  <div class="container">
      <currency-table :dataCurrency='data'/>
  </div>
</template>
<script>
import CurrencyTable from '../components/content/CurrencyTable'

export default {
  components: {
    CurrencyTable
  },
  computed: {
    data () {
      return this.$store.getters.getCurrency
    }
  },
  created () {
    this.$store.dispatch('fetchCurrency', {currency: '', type: 'json'})
  }
}
</script>
