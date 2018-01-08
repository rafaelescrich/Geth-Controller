<script>
import { QToolbar, QToolbarTitle, QIcon } from 'quasar'

export default {
  components: {
      QToolbar,
      QToolbarTitle,
      QIcon
  },
  computed: {
      transferColor(){
          console.log('state', this.$store.state)
          return this.$store.state.web3.web3Conectado 
                    ? 'green'
                    : 'red-14'
      }
  }
}
</script>

<template>
  <q-toolbar color="light-blue">
      <q-toolbar-title>
          Geth Controller
      </q-toolbar-title>
      <q-icon name="swap_vert" size="30px" :color="transferColor" />
      <template v-if="transferColor == 'red-14'">
        Disconnected
      </template>
      <template v-else>
        Connected
      </template>
  </q-toolbar>
</template>

<style scoped>

</style>
