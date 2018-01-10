import store from '../../store'
import { conectar } from './web3'

export default {
    watchSync(){
        this.writeSync()
        setTimeout(() => {
            this.watchSync()
        }, 5000)
    },
    writeSync(payload){

        let web3 = store.state.web3.web3
        web3.eth.isSyncing((err, result) => {
            let payload = { }
            if(!err){
                if(result === true){
                    payload = new SyncPayload(true, null)
                } else if(result){
                    payload = new SyncPayload(true, result)
                } else{
                    payload = new SyncPayload(false, null)
                }
            }
            store.commit('SET_SYNC', payload)
        })
    }
}

class SyncPayload{
    constructor(isSyncing, blocks){
        this.isSyncing = isSyncing
        this.blocks = blocks
    }
}