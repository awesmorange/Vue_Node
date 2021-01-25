<template>
  <v-app-bar color="orange lighten-2" fixed dark app>
    <v-spacer></v-spacer>
    <v-btn icon @click="handleDrawerToggle">
      <v-icon>mdi-note</v-icon>
    </v-btn>
    <v-toolbar-items>
      <v-btn icon @click="handleFullScreen">
        <v-icon>mdi-fullscreen</v-icon>
      </v-btn>
      <v-menu offset-y origin="center center" transition="scale-transition">
        <template v-slot:activator="{ on }">
          <v-btn icon large text slot="activator" v-on="on">
            <v-avatar size="30px">
              <img :src="accountInfo.avatarUrl" :alt="accountInfo.firstName" :title="accountInfo.firstName" />
            </v-avatar>
          </v-btn>
        </template>
        <v-list class="pa-0">
          <v-list-item
            v-for="(item, index) in profileMenus"
            :to="!item.href ? { name: item.name } : null"
            :href="item.href"
            @click="item.click"
            ripple="ripple"
            :disabled="item.disabled"
            :target="item.target"
            rel="noopener"
            :key="index"
          >
            <v-list-item-action v-if="item.icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
    <v-toolbar dense slot="extension" color="white" light>
      <v-icon>mdi-home</v-icon>
      <v-breadcrumbs :items="breadcrumbs" class="pa-3"></v-breadcrumbs>
      <v-spacer></v-spacer>
      <v-btn icon small color="black">
        <v-icon v-text="'mdi-arrow-left'" @click="handleGoBack" />
      </v-btn>
    </v-toolbar>
  </v-app-bar>
</template>
<script>

import { toggleFullScreen } from '@/util'

export default {
  name: 'AppToolbar',
  data () {
    return {
      condition: '',
      profileMenus: [
        {
          icon: 'mdi-cached',
          title: 'Change Password',
          click: () => {
            // todo
          }
        },
        {
          icon: 'mdi-logout',
          href: '#',
          title: 'Sign Out',
          click: () => {
            // todo
          }
        }
      ],
      complex: {
        headers: [],
        items: [],
        title: ''
      },
      basic: {
        dialog: false
      },
      dialog: {
        searchCustomerDialog: false,
        changePasswordDialog: false
      },
      accountInfo: {
        avatarUrl: 'https://arbfintech-panda.s3-ap-southeast-1.amazonaws.com/avatar/ronaldo.png',
        firstName: ''
      }
    }
  },
  computed: {
    breadcrumbs () {
      const items = [
        {
          text: 'Home',
          to: { path: '/home' }
        }
      ]
      if (['/', '/home'].includes(this.$route.path) === false) {
        items.push({
          text: this.$route.meta.title,
          to: { path: this.$route.path }
        })
      }
      return items
    }
  },
  methods: {
    handleFullScreen () {
      toggleFullScreen()
    },
    handleDrawerToggle () {
      this.$eventBus.$emit('side-icon-click')
    },
    handleGoBack () {
      this.$router.go(-1)
    }
  },
  created () {}
}
</script>

<style lang="sass" scoped></style>
