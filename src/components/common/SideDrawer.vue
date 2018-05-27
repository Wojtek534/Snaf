<template>
  <v-navigation-drawer persistent :mini-variant='getMiniVariant' :clipped='getNavClipped' v-model='DrawerModel' enable-resize-watcher app>
    <v-list>
      <v-list-tile value='true' v-for='(item, i) in navItems' :key='i' class="drawer-item">
        <router-link :to="item.link" tag='li' class='router-link' exact>
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </router-link>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      navItems: [
        {
          icon: 'dashboard',
          title: 'Dashboard',
          link: '/'
        },
        {
          icon: 'monetization_on',
          title: 'Currency',
          link: '/'
        },
        {
          icon: 'supervised_user_circle',
          title: 'Population',
          link: '/'
        }
      ]
    };
  },
  computed: {
    ...mapGetters(['getNavClipped', 'getDrawer', 'getFixed', 'getMiniVariant']),
    DrawerModel: {
      get() {
        return this.getDrawer;
      },
      set() {
        return this.getDrawer;
      }
    }
  }
};
</script>
