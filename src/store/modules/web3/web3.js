import Web3 from 'web3'
import axios from 'axios'
import store from '../../store'
import Peers from './peers'
import Sync from './sync'

let web3, web3Conectado = false

console.log('Fazendo GET no axios')
conectar()

export default {
      state: {
            web3,
            web3Conectado,
            peers: { },
            sync: { }
      },
      mutations: {
            SET_WEB3(state, web3){
                  state.web3 = web3
            },
            SET_WEB3_CONECTADO(state, conectado){
                  state.web3Conectado = conectado
            },
            SET_PEERS(state, peers){
                  state.peers = peers
            },
            SET_SYNC(state, payload){
                  state.sync = payload
            }
      },
      getters: {
            getWeb3(state){
                  return state.web3 
            },
            getWeb3Conectado(state){
                  return state.web3Conectado
            },
            getPeers(state){
                  return state.peers
            },
            getSync(state){
                  return state.sync
            }
      }
}

function conectar(){
      axios.get('http://localhost:8080/api/connect').then(response => {
            //TODO: host remoto
            const wsUrl = 'ws://localhost:8545'
            const provider = new Web3.providers.WebsocketProvider(wsUrl)

            provider.connection.onerror = exp => {
                  console.error(exp)
                  web3Conectado = false
                  store.commit('SET_WEB3_CONECTADO', web3Conectado)
                  tentarReconectar()
            }
            
            web3 = new Web3(provider)
            store.commit('SET_WEB3', web3)

            web3.eth.net.isListening().then(bool => {
                  web3Conectado = bool
                  store.commit('SET_WEB3_CONECTADO', web3Conectado)
                  if(bool) onConnected()
                  else onDisconnected()
                  console.log('Conectado: ')
                  console.log(bool)
            })
      }).catch(reason => {
            web3Conectado = false
            store.commit('SET_WEB3_CONECTADO', web3Conectado)
            console.error('Impossível contactar o servidor.. Verifique se a janela de terminal do servidor está aberta')
            console.error(reason)
      })
}

function onConnected(){
      // console.clear()
      Peers.watchPeers()
      Sync.watchSync()
}

function onDisconnected(){

}

function tentarReconectar(){
      setTimeout(() => {
            console.info("Tentando reconectar")
            conectar()
        }, 1000);
}