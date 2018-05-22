<template>
  <section class="section-currency">
    <feature-box/>
    <flipper-card/>
      <!--<currency-table :dataCurrency='data'/>-->
  </section>
</template>
<script>
import CurrencyTable from '../components/content/CurrencyTable'
import FlipperCard from '../components/content/FlipperCard'
import FeatureBox from '../components/content/FeatureBox'
export default {
  components: {
    CurrencyTable,
    FlipperCard,
    FeatureBox
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
