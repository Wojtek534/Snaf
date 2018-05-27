import axios from 'axios';
import * as api from '../../rest/restApi';
import _ from 'lodash';

export default {
  state: {
    currency: '',
    population: '',
    rates: [
      {
        name: 'euro',
        value: ''
      },
      {
        name: 'usd',
        value: ''
      },
      {
        name: 'gbp',
        value: ''
      },
      {
        name: 'rub',
        value: ''
      },
      {
        name: 'yuan',
        value: ''
      }
    ]
  },
  getters: {
    getCurrency(state) {
      return state.currency;
    },
    getRates(state) {
      return state.rates;
    },
    getRateByName(state) {
      return keyword =>
        state.items.filter(item => {
          return item.name === keyword;
        });
    }
  },
  mutations: {
    setCurrency(state, data) {
      state.currency = data;
    },
    setCurrencyRate(state, input) {
      let obj = state.currency;
      let data = _.map(obj.data);
      data = data.filter((value, index, array) => {
        return value.code == _.toUpper(input.label);
      });
      switch (input.stateNo) {
        case 1:
          state.rates[0].value = data[0].mid;
        case 2:
          state.rates[1].value = data[0].mid;
        case 3:
          state.rates[2].value = data[0].mid;
        case 4:
          state.rates[3].value = data[0].mid;
        case 5:
          state.rates[4].value = data[0].mid;
      }
    },
    setPopulation(state, data) {
      state.population = data;
    }
  },
  actions: {
    fetchCurrency(context, config) {
      const url = api.nbp(config.currency, config.type);
      axios
        .get(url)
        .then(response => {
          const obj = {
            title: 'Currency',
            data: _.map(response.data[0].rates),
            headers: [
              {
                text: 'Waluta',
                value: 'currency',
                align: 'left',
                sortable: true
              },
              { text: 'Kod', value: 'code', align: 'left', sortable: false },
              {
                text: 'Kurs [PLN]',
                value: 'rate',
                align: 'left',
                sortable: false
              }
            ],
            pagination: {
              sortBy: 'Currency',
              descending: true,
              rowsPerPage: -1
            }
          };
          context.commit('setCurrency', obj);
          context.commit('setCurrencyRate', { label: 'EUR', stateNo: 1 });
          context.commit('setCurrencyRate', { label: 'USD', stateNo: 2 });
          context.commit('setCurrencyRate', { label: 'GBP', stateNo: 3 });
          context.commit('setCurrencyRate', { label: 'RUB', stateNo: 4 });
          context.commit('setCurrencyRate', { label: 'CNY', stateNo: 5 });
        })
        .catch(error => {
          console.log(error);
        });
    },
    fetchPopulation(context, config) {
      const url = api.worldBank();
      axios.get(url).then(response => {
        let obj = _.map(response)[0];
        obj = obj[1];
        console.log(obj);
        context.commit('setPopulation', obj[1]);
      });
    }
  }
};
