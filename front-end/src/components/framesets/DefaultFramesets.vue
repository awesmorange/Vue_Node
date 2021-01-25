<template>
  <v-app class="dashboard">
    <app-toolbar class="app--toolbar" @side-icon-click="handleDrawerVisible" />
    <!-- Page Header -->
    <div class="page-wrapper">
      <app-drawer class="app--drawer"/>
      <router-view class="router-page"></router-view>
    </div>
  </v-app>
</template>

<script>
import { AppDrawer, AppToolbar } from '@/components/common'

export default {
  components: {
    AppDrawer,
    AppToolbar
  },

  data () {
    return {
      showDrawer: this.isShowDrawer()
    }
  },
  async mounted () {
    // this.$eventBus.$on('side-icon-click', target => {
    //   this.handleDrawerVisible()
    // })
  },
  methods: {
    isShowDrawer () {
      const href = location.href
      return href.indexOf('welcome') !== -1 || href.indexOf('workbench') !== -1 || href.indexOf('queue') !== -1
    },
    handleDrawerVisible () {
      this.showDrawer = !this.showDrawer
    }
  }
}
</script>

<style lang="sass" scoped>
.dashboard
  height: calc(100vh - 155px)
  overflow-y: auto
.page-wrapper
  height: calc(100vh - 155px)
  display: flex
  .app--drawer
    //position: fixed
    //top: 0px
  .router-page
    margin: 15px
</style>
