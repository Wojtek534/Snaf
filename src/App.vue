<template>
  <v-app>
    <v-content>
      <div class="body">
        <Navigation/>
          <router-view/>
        <Footer/>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from './components/common/Navigation'
import Footer from './components/common/Footer'

export default {
  components: {
    Navigation,
    Footer
  },
  name: 'App'
}
</script>
<style lang="scss">
  @import './style/main.scss';
</style>

