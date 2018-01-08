import store from '../../store'

export default {
    watchSync(){
        let web3 = store.state.web3.web3
        web3.eth.isSyncing((err, result) => {
            let payload
            if(!err){
                if(result === true){
                    payload = new SyncPayload(true, null)
                } else if(result){
                    payload = new SyncPayload(true, result)
                } else{
                    payload = new SyncPayload(false, null)
                }
            }
            this.writeSync(payload)
        })
    },
    writeSync(payload){
        store.commit('SET_SYNC', payload)
    }
}

class SyncPayload{
    constructor(isSyncing, blocks){
        this.isSyncing = isSyncing
        this.blocks = blocks
    }
}