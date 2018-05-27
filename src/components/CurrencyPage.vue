<template>
  <section class="section section--first">
    <v-flex xs8 offset-xs2>
     <v-container fluid grid-list-xl text-xs-center>
      <v-layout row justify-space-between>
        <v-flex xs3 v-for="(item, index) in featureObj" :key="index">
          <feature-box :boxTitle='item.boxTitle' :boxIcon ='item.boxIcon' :boxContent ='getRates[index].value'/>
        </v-flex>
      </v-layout>
    <v-layout row wrap>
      <v-flex>
        <currency-table :dataCurrency='restData'/>
        </v-flex>
    </v-layout>
     </v-container>
     </v-flex>
  </section>
</template>
<script>
import _ from 'lodash';
import CurrencyTable from '../components/content/CurrencyTable';
import FeatureBox from '../components/content/FeatureBox';
export default {
  data() {
    return {
      featureObj: [
        {
          boxTitle: 'EUR',
          boxIcon: '€'
        },
        {
          boxTitle: 'USD',
          boxIcon: '$'
        },
        {
          boxTitle: 'GBP',
          boxIcon: '£'
        },
        {
          boxTitle: 'RUB',
          boxIcon: '₽'
        },
        {
          boxTitle: 'CNY',
          boxIcon: '¥'
        }
      ],
      euro: ''
    };
  },
  components: {
    CurrencyTable,
    FeatureBox
  },
  computed: {
    restData() {
      return this.$store.getters.getCurrency;
    },
    getRates() {
      return this.$store.getters.getRates;
    }
  },
  created() {
    this.$store.dispatch('fetchCurrency', { currency: '', type: 'json' });
  }
};
</script>
