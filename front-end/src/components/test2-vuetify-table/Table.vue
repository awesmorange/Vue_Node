<template>
    <div class="tabledata" data-app="true">
<!--        <v-data-table-->
<!--                :headers="headers"-->
<!--                :items="desserts"-->
<!--                :options.sync="options"-->
<!--                :server-items-length="totalDesserts"-->
<!--                :footer-props="footerProps"-->
<!--                sort-by="calories"-->
<!--                class="elevation-1"-->
<!--        >-->
        <v-data-table
                :headers="headers"
                :items="desserts"
                :options.sync="options"
                :footer-props="footerProps"
                sort-by="calories"
                class="elevation-1"
        >
            <template v-slot:top>
                <v-toolbar flat color="white">
                    <v-toolbar-title>My CRUD</v-toolbar-title>
                    <v-divider
                            class="mx-4"
                            inset
                            vertical
                    ></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ on }">
                            <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.protein"
                                                          label="Protein (g)"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon
                        small
                        class="mr-2"
                        @click="editItem(item)"
                >
                    mdi-pencil
                </v-icon>
                <v-icon
                        small
                        @click="deleteItem(item)"
                >
                    mdi-delete
                </v-icon>
            </template>
        </v-data-table>
        <!--消息提示-->
        <div class="snackbar">
            <v-snackbar
                    v-model="snackbar.show"
                    right
                    bottom
                    :multi-line="false"
                    :timeout='snackbar.timeout'
                    :color="snackbar.color"
                    class="elevation-0 mysnackbar"
            >
                {{snackbar.message}}
                <v-btn
                        text
                        @click="snackbar.show = false"
                >
                    <v-icon
                            small
                    >
                        mdi-close
                    </v-icon>
                </v-btn>
            </v-snackbar>
        </div>
    </div>

</template>

<script>
    export default {
        data: () => ({
            dialog: false,
            headers: [
                {
                    text: 'Dessert (100g serving)',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                {text: 'Calories', value: 'calories'},
                {text: 'Fat (g)', value: 'fat'},
                {text: 'Carbs (g)', value: 'carbs'},
                {text: 'Protein (g)', value: 'protein'},
                {text: 'Actions', value: 'actions', sortable: false},
            ],//表头
            desserts: [],//表格数据
            editedIndex: -1,
            editedItem: {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0,
            },
            defaultItem: {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0,
            },
            snackbar: {
                show: false,
                message: null,
                color: null,
                timeout: 1000,
            },
            options: {
                page: 1,//当前页
                itemsPerPage: 10,//页容量
                // itemsPerPageitems: [5, 20, 50, 100]//
                // totalItems:0//总条数
            },
            footerProps: {'items-per-page-options': [5, 10, 20, 50, {text: 'All', value: -1}]},
            totalDesserts: 0//数据总条数
        }),

        computed: {
            formTitle() {
                return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
            },
        },

        watch: {
            dialog(val) {
                val || this.close()
            },
            options(newvalue) {
                //当前页和页容量
                this.currentPage(newvalue)
            },
            selection(newvalue) {
                this.treeviewvalue(newvalue)
            }
        },
        created() {
            this.initialize()
        },
        methods: {
            initialize() {
                let {page, itemsPerPage} = this.options;
                console.log(page)//当前页 默认为1
                console.log(itemsPerPage)//页容量 默认一页需要五条
                //初始化请求接口，得到第一页的数据+五条数据+总的条数,赋值给desserts
                this.desserts = [
                    {
                        name: 'Frozen Yogurt',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                    },
                    {
                        name: 'Cupcake',
                        calories: 305,
                        fat: 3.7,
                        carbs: 67,
                        protein: 4.3,
                    },
                    {
                        name: 'Gingerbread',
                        calories: 356,
                        fat: 16.0,
                        carbs: 49,
                        protein: 3.9,
                    },

                    {
                        name: 'Jelly bean',
                        calories: 375,
                        fat: 0.0,
                        carbs: 94,
                        protein: 0.0,
                    },
                    {
                        name: 'Lollipop',
                        calories: 392,
                        fat: 0.2,
                        carbs: 98,
                        protein: 0,
                    },
                    {
                        name: 'Honeycomb',
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5,
                    },
                    {
                        name: 'Donut',
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9,
                    },
                    {
                        name: 'KitKat',
                        calories: 518,
                        fat: 26.0,
                        carbs: 65,
                        protein: 7,
                    },

                    {
                        name: 'Honeyco',
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5,
                    },
                    {
                        name: 'Don',
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9,
                    },
                    {
                        name: 'KitK',
                        calories: 518,
                        fat: 26.0,
                        carbs: 65,
                        protein: 7,
                    },
                ];
                //总页数,得到后台传过来的总的数据条数，进行赋值
                //这里的值 10  应该是后端传过来的数值
                console.log("长度"+this.desserts.length)
                this.totalDesserts = this.desserts.length
                if (itemsPerPage > 0) {
                    this.desserts = this.desserts.slice((page - 1) * itemsPerPage, page * itemsPerPage)
                }
            },

            //编辑按钮点击事件
            editItem(item) {
                this.editedIndex = this.desserts.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },
            //删除按钮点击事件
            deleteItem(item) {
                const index = this.desserts.indexOf(item)
                console.log(index)
                if (confirm('Are you sure you want to delete this item?')) {
                    //请求后台删除接口
                    this.desserts.splice(index, 1)//此处只是模拟删除数据
                    this.snackbar = {
                        message: 'Delete Successfully!',
                        color: 'success',
                        show: 'true',
                        timeout: 1000
                    }
                }
            },

            close() {
                this.dialog = false
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                })
            },

            save() {
                if (this.editedIndex > -1) {
                    //进行深复制，一级属性是深复制，一级以下是浅复制
                    console.log(this.editedIndex)
                    Object.assign(this.desserts[this.editedIndex], this.editedItem)
                } else {
                    this.desserts.push(this.editedItem)
                }
                this.close()
            },

            currentPage(value) {
                //自动更改数据包括（当前页，上一页，下一页，总的数据条数）
                //总的数据条数？？？？？
                let {page, itemsPerPage} = value;
                console.log(value);
                console.log(page);
                console.log(itemsPerPage);

            },
        },
    }
</script>


<style scoped>
    .tabledata {
        margin: 50px 0;
    }

    .snackbar > .mysnackbar > .v-snack__wrapper {
        box-shadow: none !important;
    }
</style>