<template>
    <v-form v-model="valid">
      <v-text-field
        label="Message"
        v-model="message.content"
        placeholder="Message"
        type="Text"
        required>
      </v-text-field>
      <v-btn
            color="pink"
            dark
            small
            absolute
            fab
          @click="submitMsg">+</v-btn>
    </v-form>
</template>
<script>
export default {
  data () {
    return {
      message: {
        content: ''
      },
      valid: false
    }
  }
}
</script>
