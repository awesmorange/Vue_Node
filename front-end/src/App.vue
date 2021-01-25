<template>
  <v-app>
    <v-content class="app-content">
       <router-view></router-view>
      <!-- App Footer -->
      <v-footer class="white pa-3 app--footer">
        <span class="caption">COPY RIGHT &copy; <strong>ORANGE</strong></span>
        <v-spacer />
        <span class="caption mr-1"></span>
        <v-icon color="pink" small>favorite</v-icon>
      </v-footer>
      <!-- Go to top -->
      <app-top></app-top>
    </v-content>
    <!-- theme setting -->
<!--    <v-btn small fab dark falt fixed top="top" right="right" class="setting-fab" color="red" @click="openThemeSettings">-->
<!--      <v-icon>mdi-cog</v-icon>-->
<!--    </v-btn>-->
<!--    <v-navigation-drawer-->
<!--        class="setting-drawer"-->
<!--        temporary-->
<!--        right-->
<!--        v-model="rightDrawer"-->
<!--        hide-overlay-->
<!--        fixed-->
<!--    >-->
<!--      <ThemeSetting></ThemeSetting>-->
<!--    </v-navigation-drawer>-->
  </v-app>
</template>

<script>
import { AppTop } from '@/components/common'
// import { ThemeSetting, AppTop } from '@/components/common'
export default {
  name: 'app',
  components: {
    // ThemeSetting,
    AppTop
  },
  data: () => ({
    expanded: true,
    rightDrawer: false,
    snackbar: {
      show: false,
      text: '',
      color: '',
    }
  }),
  computed: {},
  created () {
    // AppEvents.forEach(item => {
    //     this.$on(item.name, item.callback);
    // });
    // window.getApp = this;
  },
  methods: {
    openThemeSettings () {
      this.$vuetify.goTo(0);
      this.rightDrawer = (!this.rightDrawer);
    }
  }
}
</script>

<style lang="scss">
body {
  font-family: Ubuntu;
  color: #555;
}
.app-content {
  height: calc(100vh - 150px);
}
v-footer {
  position: fixed;
  bottom: 0;
}
.setting-fab {
  margin: 100px 0px 10px;
  border-radius: 0;
}
</style>