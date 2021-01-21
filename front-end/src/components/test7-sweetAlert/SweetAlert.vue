<template>
  <div id="page">
    Alert
    <template v-for="(item, index) of TYPE_ENUM">
      <v-btn :key="index" @click="popAlert(item.value)" :class="item.class"> {{item.text}} </v-btn>
    </template>
    <v-divider></v-divider>
    Toast
    <template v-for="(item, index) of TYPE_ENUM">
      <v-btn :key="(index+1)*10" @click="popToast(item.value)" :class="item.class"> {{item.text}} </v-btn>
    </template>
  </div>
</template>
<script>
const TYPE_ENUM = {
  WARNING: { value: 0, text: 'Warning', class: 'warning' },
  SUCCESS: { value: 1, text: 'Success', class: 'success' },
  ERROR: { value: 2, text: 'Error', class: 'error' },
  INFO: { value: 3, text: 'Info', class: 'grey' },
  QUESTION: { value: 4, text: 'Question', class: 'primary' }
}
export default {
  name:'SweetAlert',
  data(){
    return{
      TYPE_ENUM: [
        { value: 0, text: 'Warning', class: 'warning' },
        { value: 1, text: 'Success', class: 'success' },
        { value: 2, text: 'Error', class: 'error' },
        { value: 3, text: 'Info', class: 'grey' },
        { value: 4, text: 'Question', class: 'primary' }
      ]
    }
  },
  methods:{
    popAlert (type) {
      switch (type) {
        case TYPE_ENUM.WARNING.value:
          this.$warningAlert.fire({})
          break
        case TYPE_ENUM.SUCCESS.value:
          this.$successAlert.fire({})
          break
        case TYPE_ENUM.ERROR.value:
          this.$errorAlert.fire({})
          break
        case TYPE_ENUM.INFO.value:
          this.$infoAlert.fire({})
          break
        case TYPE_ENUM.QUESTION.value:
          this.$questionAlert.fire({})
          break
        default:
          break
      }
    },
    popToast (type) {
      switch (type) {
        case TYPE_ENUM.WARNING.value:
          this.$warningToast.fire({ title: 'warning' })
          break
        case TYPE_ENUM.SUCCESS.value:
          this.$successToast.fire({ title: 'success' })
          break
        case TYPE_ENUM.ERROR.value:
          this.$errorToast.fire({ title: 'error' })
          break
        case TYPE_ENUM.INFO.value:
          this.$infoToast.fire({ title: 'info' })
          break
        case TYPE_ENUM.QUESTION.value:
          this.$questionToast.fire({ title: 'question' })
          break
        default:
          break
      }
    }
  }
}
</script>