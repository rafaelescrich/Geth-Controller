import store from '../../store'
import { conectar } from './web3'

export default {
    watchPeers(){
        this.writePeerCount()
        setTimeout(() => {
            this.watchPeers()
        }, 5000)

    },
    writePeerCount(){
        let web3 = store.state.web3.web3
        web3.eth.net.getPeerCount((error, result) => {
            if(error){
                store.commit('SET_PEERS', {})
                conectar()
            } else{
                store.commit('SET_PEERS', {count: result})
            }
        })
    }
}