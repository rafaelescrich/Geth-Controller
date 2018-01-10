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
  data(){
      return {
          currentGasPrice: 'Disconnected',
          currentCoinbase: 'Disconnected'
      }
  },
  methods: {
      callbackWatcher(func, cbErr, cbResult){
          func((err, result) => {
              if(err){
                  cbErr(err)
                  return
              }

              cbResult(result)
          })
      }
  },
  computed: {
      ...mapGetters([
          'getWeb3'
      ]),
      gasPrice(){

          this.callbackWatcher(this.getWeb3.eth.getGasPrice, err => console.error(err), result => 
                this.currentGasPrice = this.getWeb3.utils.fromWei(result, 'ether')
          )

          return this.currentGasPrice
      },
      coinbase(){

          this.callbackWatcher(this.getWeb3.eth.getCoinbase, err => {
            this.currentCoinbase = 'No coinbase registered'
            console.error(err)
          }, result => this.currentCoinbase = result)

      }
  }
}
</script>

<template>
  <q-card>
      <q-card-title>
          <q-icon name="info_outline" />
          +Info
      </q-card-title>
      <q-card-separator />
      <q-card-main>
          <div>
            Gas Price: {{gasPrice}} ETH
          </div>
          <div>
              Coinbase: {{coinbase}}
          </div>
          <div>
              
          </div>

          {{Object.keys(getWeb3.eth)}}
      </q-card-main>
  </q-card>
</template>