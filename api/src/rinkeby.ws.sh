# This command opens a javascript console on the ethereum live network with JSON rpc access on localhost:8545
geth --identity "myRinkebyWSNode" --datadir "./dir" --ws --wsaddr "localhost" --wsport "8545" --wsorigins "*" --rinkeby --wsapi "web3,eth,net,personal"
