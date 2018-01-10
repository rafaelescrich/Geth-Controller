<script>
import { mapGetters } from 'vuex'
import cardImports from '../../utils/cardImports'
export default {
  components: {
      ...cardImports
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

          if(!this.getWeb3) return 'Disconnected'
          this.callbackWatcher(this.getWeb3.eth.getGasPrice, err => console.error(err), result => 
                this.currentGasPrice = this.getWeb3.utils.fromWei(result, 'ether')
          )

          return this.currentGasPrice
      },
      coinbase(){
          if(!this.getWeb3) return 'Disconnected'
          this.callbackWatcher(this.getWeb3.eth.getCoinbase, err => {
            this.currentCoinbase = 'No coinbase registered'
            console.error(err)
          }, result => this.currentCoinbase = result)

        return this.currentCoinbase
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
      <q-card-main class="sm-gutter">
          <div>
            Version: {{getWeb3.version ? getWeb3.version : 'Disconnected'}}    
          </div>
          <div>
            Gas Price: {{gasPrice}} ETH
          </div>
          <div>
              Coinbase: {{coinbase}}
          </div>
      </q-card-main>
  </q-card>
</template>

