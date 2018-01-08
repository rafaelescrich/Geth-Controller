import store from '../../store'

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
            } else{
                store.commit('SET_PEERS', {count: result})
            }
        })
    }
}