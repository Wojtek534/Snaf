import axios from 'axios'
import * as api from '../../rest/restApi'
import _ from 'lodash'

export default {
  state: {
    currency: ''
  },
  getters: {
    getCurrency (state) {
      return state.currency
    }
  },
  mutations: {
    setCurrency (state, data) {
      state.currency = data
    }
  },
  actions: {
    fetchCurrency (context, config) {
      console.log(config)
      const url = api.nbp(config.currency, config.type)
      axios.get(url)
      .then((response) => {
        const obj = {
          title: 'Currency',
          data: _.map(response.data[0].rates),
          headers: [
          {text: 'Currency', value: 'currency', align: 'left', sortable: true}, {text: 'Code', value: 'code', align: 'left', sortable: false},
          {text: 'Rate', value: 'rate', align: 'left', sortable: false}],
          pagination: {'sortBy': 'Currency', 'descending': true, 'rowsPerPage': -1}
        }
        // debugger
        context.commit('setCurrency', obj)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
}
