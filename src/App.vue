<template>
<v-app>
  <main>
    <Navigation/>
    <v-content>
      <router-view/>
    </v-content>
  </main>
  <Footer/>
</v-app>
</template>

<script>
import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';

export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  },
  created() {
    this.$store.commit('setDrawerStorage');
  }
};
</script>
<style lang="scss">
@import './style/main.scss';
</style>
