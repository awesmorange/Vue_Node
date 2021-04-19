<template>
  <v-form
      ref="form"
      v-model="valid"
      lazy-validation
  >
    <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
    ></v-text-field>

    <v-text-field
        v-model="pass"
        :rules="passRules"
        label="Password"
        required
    ></v-text-field>

    <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
    ></v-checkbox>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="signIn">Sign In</v-btn>
    <v-btn color="primary" class="mr-4" @click="resetPass">Reset Pass</v-btn>
    <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

  </v-form>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    pass: '',
    passRules: [
      v => !!v || 'Password is required',
      v => v.length > 6 || 'Password must be valid',
    ],
    select: null,
    checkbox: false,
  }),

  methods: {
    validate () {
      this.$refs.form.validate()
    },
    signIn () {
      const $this = this
      if (this.$refs.form.validate()) {
        this.$api.login.signIn(this.name).then(res => {
          console.log(res)
          $this.$router.push('/home')
        })
      }
    },
    resetPass () {
      const $this = this
      if (this.$refs.form.validate()) {
        this.$api.login.resetPass(this.name, this.pass).then(res => {
          console.log(res)
          $this.$router.push('/home')
        })
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
}
</script>
