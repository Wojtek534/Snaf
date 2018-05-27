<template>
     <!-- <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field> -->
    <v-data-table
        :headers="dataCurrency.headers"
        :items="dataCurrency.data"
        :search="search"
        prev-icon="arrow_left"
        next-icon="arrow_right"
        class="elevation-5"
        expand light :rows-per-page-items="[10,20,30]">
      <template
        slot="headerCell"
        slot-scope="props">
        <v-tooltip bottom>
          <span slot="activator">
            {{ props.header.text }}
          </span>
          <span>
            {{ props.header.text }}
          </span>
        </v-tooltip>
      </template>
      <template
        slot="items"
        slot-scope="props">
        <td class="text-xs-left">{{ props.item.currency }}</td>
        <td class="text-xs-left">{{ props.item.code }}</td>
        <td class="text-xs-left">{{ props.item.mid }}</td>
      </template>
    </v-data-table>
</template>
<script>
export default {
  props: ['dataCurrency'],
  data() {
    return {
      search: '',
      rows: 25
    };
  }
};
</script>
