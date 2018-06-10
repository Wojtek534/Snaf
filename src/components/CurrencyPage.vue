<template>
  <section class="section section--first">
    <v-container xs10 offset-xs1>
      <v-layout row justify-space-between>
        <v-flex xs3 v-for="(item, index) in featureObj" :key="index">
            <feature-box :boxTitle='item.boxTitle' :boxIcon ='item.boxIcon' :boxContent ='Math.round(getRates[index].value * 10000)/10000'/>
        </v-flex>
      </v-layout>
            <v-layout>
      <v-flex>
        <currency-table :dataCurrency='restData'/>
      </v-flex >
            </v-layout>
      </v-container>
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
