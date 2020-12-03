<template>
    <v-card id="card">
        <v-card-text>
            <div class="layout column align-center" style="padding-top: 25%;">
                <h1 class="flex my-4 primary--text" style="font-weight: 300;">SIGN&nbsp;&nbsp;IN</h1>
            </div>
            <v-form>
                <v-text-field class="input-style" append-icon="person" name="login" label="Account" type="text" :rules="[rules.verifyAccount]"
                              v-model="model.username"></v-text-field>
                <v-text-field class="input-style" append-icon="lock" name="password" label="Password" id="password" type="password" :rules="[rules.min]"
                              v-model="model.userpwd" @change="showRestBtn"></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions id="action-btn">
            <v-icon id="login-btn" @click="login"  :disabled="disableLoginBtn">fingerprint</v-icon>
            <a @click="resetPassword" v-show="resetBtnShow">Reset Password</a>
        </v-card-actions>
    </v-card>
</template>

<script>
    // import axios from 'axios'
    export default {
        name: "Userlogin",
        data: () => ({
            model: {
                username: '',
                userpwd: ''
            },
            rules: {
                verifyAccount: function (value) {
                    let reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*$/;
                    if (reg.test(value)) {
                        return true;
                    } else {
                        return 'Please enter the correct account number';
                    }
                },
                min: function(value) {
                    if (value.length >= 6) {
                        return true;
                    } else {
                        return "Min 6 characters";
                    }
                }
            },
            disableLoginBtn: false,
            resetBtnShow:true
        }),
        methods: {
            login() {
                // this.loading = true;
                /*获取账号密码，发送请求*/
                let {username, userpwd} = this.model;
                if (username !== "" && userpwd !== "") {
                    if (this.rules.verifyAccount(this.model.username) === true) {
                        this.disableLoginBtn = true;
                        let params = {
                            account:username,
                            password:userpwd
                        }
                        // this.$api.login.signIn()
                        this.$api.login.signIn(params).then(res =>{
                            console.log((res.data))
                        })
                       /* let account = username;
                        let password = userpwd;*/
                        /*axios({
                            url: '/application/v3/employee/sign-in',
                            method: 'put',
                            data: {account, password}
                        }).then(res => {
                            console.log(res);
                            setTimeout(() => {
                                this.$router.push('/dashboard');
                            }, 1000);
                        }).catch(
                            this.$swal({
                                title: '错误！',
                                text: '请输入正确的账号和密码',
                                type: 'error',
                            })
                        )*/
                    } else {
                        this.disableLoginBtn = false;
                    }
                }
            },
            resetPassword() {
                this.$emit('rotateLogin');
            },
            showRestBtn(){
                if(this.rules.min(this.model.userpwd)){
                    this.resetBtnShow=true;
                }
            }
        },
        created() {
            let {username, userpwd} = this.model;
            if (username === "" && userpwd === "") {
                this.disableLoginBtn = true;
            }
        },
        updated() {
            let {username, userpwd} = this.model;
            if (!(username === "" && userpwd === "")) {
                this.disableLoginBtn = false;
            }
        }
    }
</script>
<style lang="stylus" scoped>
    #card {
        width 100%
        height 100%
        background-color white
        vertical-align center;
    }
    #action-btn{
        display: flex;
        flex-direction: column;
    }
    #login-btn{
        color: #00BCD4;
        width: 100px;
        height: 100px;
        font-size: 60px;
        margin: auto;
    }
    .input-style{
        margin 10px 0;
    }
</style>