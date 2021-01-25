<template>
    <v-navigation-drawer
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
    >
      <v-list-item class="px-2">
        <v-list-item-content>
          <v-list-item-title class="title">
            Study Path
          </v-list-item-title>
          <v-list-item-subtitle>
            click to learn it
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-btn
            icon
            @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.path"
            link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>
<script>
import menu from "@/api/model/menu";
export default {
  data () {
    return {
      drawer: true,
      items: menu,
      mini: true
    }
  },
}
</script>