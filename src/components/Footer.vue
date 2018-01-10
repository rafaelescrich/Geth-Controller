<script>
import { QTabs, QRouteTab } from 'quasar'
export default {
  components: {
      QTabs, 
      QRouteTab
  }
}
</script>

<template>
  <q-tabs color="light-blue">
      <q-route-tab to="/" slot="title" exact name="tab1" icon="info" />
      <q-route-tab to="/miner" slot="title" exact name="tab2" icon="memory" />
  </q-tabs>
</template>

