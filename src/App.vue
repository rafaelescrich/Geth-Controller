<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-layout view="hhh Lpr fFf">
      <st-header slot="header" />
      <router-view slot="navigation" />
      <st-footer slot="footer" />
    </q-layout>
  </div>
</template>

<script>
/*
 * Root component
 */
import StHeader from './components/Header.vue'
import { QLayout } from 'quasar'
import StFooter from './components/Footer.vue'

export default {
  components: {
    StHeader,
    QLayout,
    StFooter
  },
  created(){
    console.log('App criado')
  }
}
</script>

<style>
/* body, html, #q-app {
  height: 100%!important;
} */
</style>
