<template>
    <v-navigation-drawer
            id="appDrawer"
            :mini-variant.sync="mini"
            fixed
            v-model="drawer"
            width="260"
            :dark="$vuetify.dark">
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="title">
                    Study Path
                </v-list-item-title>
                <v-list-item-subtitle>
                    click to learn it
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <v-list
                dense
                nav
                class="py-0"
        >
            <v-list-item
                    v-for="item in menus"
                    :key="item.title"
                    :to="item.path"
                    link
            >
                <v-list-item-icon>
                    <v-icon small>{{ item.icon }}</v-icon>
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
//    import VuePerfectScrollbar from "vue-perfect-scrollbar";
    //import PandaImg from "@/assets/images/m.png";
    export default {
        name: 'AppDrawer',
        components: {
            // VuePerfectScrollbar
        },
        props: {
            expanded: {
                type: Boolean,
                default: true
            }
        },
        data: () => ({
            mini: false,
            drawer: true,
            menus: menu,
            //logoImg: PandaImg,
            scrollSettings: {
                maxScrollbarLength: 160
            }
        }),
        computed: {
            computeGroupActive() {
                return true;
            },
            computeLogo() {
                return this.logoImg;
            },

            sideToolbarColor() {
                return this.$vuetify.options.extra.sideNav;
            }
        },
        created() {
            // 导航栏是否被影藏
            // window.getApp.$on("APP_DRAWER_TOGGLED", () => {
            //     this.drawer = !this.drawer;
            // });
        },

        methods: {
            genChildTarget(item, subItem) {
                if (subItem.href) return;
                if (subItem.component) {
                    return {
                        name: subItem.component
                    };
                }
                return { name: `${item.group}/${subItem.name}` };
            }
        }
    }
</script>