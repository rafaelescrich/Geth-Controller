<script>
import { mapGetters } from 'vuex'
import { 
    QCard, 
    QCardTitle, 
    QCardMain,
    QCardSeparator,
    QIcon
    
    } from 'quasar'
export default {
  components: {
      QCard,
      QCardTitle,
      QCardMain,
      QCardSeparator,
      QIcon
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