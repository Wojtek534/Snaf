<template>
  <div>
    <Drawer/>
    <!-- Top navigation -->
    <v-toolbar app :clipped-left="getNavClipped">
      <!-- Left navigation UI  -->
      <!-- Layout Only -->
      <v-toolbar-items>
        <v-toolbar-side-icon @click.stop="setDrawer"></v-toolbar-side-icon>
        <v-btn icon @click.stop="setMiniVariant">
          <v-icon v-html="getMiniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
        </v-btn>
        <v-btn v-hide="true" icon @click.stop="setNavClipped">
          <v-icon>web</v-icon>
        </v-btn>
      </v-toolbar-items>
      <!-- Title -->
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>
<script>
import Drawer from './SideDrawer'
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      title: 'Snaf'
    }
  },
  components: {
    Drawer
  },
  methods: {
    ...mapMutations(['setNavClipped', 'setDrawer', 'setFixed', 'setMiniVariant'])
  },
  computed: {
    ...mapGetters(['getNavClipped', 'getDrawer', 'getFixed', 'getMiniVariant', 'getNavRight']),
    drawerModel: {
      get () {
        return this.getNavDrawer
      },
      set () {
        return this.getNavDrawer
      }
    },
    isUserLogged () {
      return this.$store.getters.isUserLogged
    }
  }
}
</script>
