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
            'getSync',
            'getWeb3Conectado'
        ])
    },
}
</script>

<template>
    <q-card>
      <q-card-title>
          <q-icon name="sync" />
          Syncing
      </q-card-title>
      <q-card-separator />
      <q-card-main>
          <template v-if="getSync">
              <template v-if="!getSync.isSyncing && getWeb3Conectado">
                Synced
              </template>
              <template v-else-if="getSync.blocks">
                  {{getSync.blocks}}
              </template>
              <template v-else>
                  Desconectado
              </template>
          </template>
          <template v-else>
              Desconectado
          </template>
      </q-card-main>
  </q-card>
</template>

