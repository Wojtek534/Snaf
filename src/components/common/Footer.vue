<template>
  <v-footer class="grey darken-3" :fixed="true">
    <v-layout row wrap justify-center white--text>
      <span>&copy; {{currentYear}} Wojciech Rzepka</span>
    </v-layout>
  </v-footer>
</template>
<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>
