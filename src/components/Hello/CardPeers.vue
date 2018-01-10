<script>
import { mapGetters } from 'vuex'
import cardImports from '../../utils/cardImports'
export default {
  components: {
      ...cardImports
  },
  computed: {
      ...mapGetters([
          'getPeers'
      ]),
      showPeers(){
          let count = 0

          if(this.getPeers != undefined) count = this.getPeers.count
          return count
      }
  },
  created(){

  }
}
</script>

<template>
  <q-card>
      <q-card-title>
          <q-icon name="cast_connected" />
          Peers
      </q-card-title>
      <q-card-separator />
      <q-card-main>
          <template v-if="showPeers">
            {{getPeers.count}}
          </template>
          <template v-else>
              Desconectado
          </template>
      </q-card-main>
  </q-card>
</template>