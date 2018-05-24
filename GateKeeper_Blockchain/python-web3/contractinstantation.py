import json
from web3 import Web3, HTTPProvider, IPCProvider
#set web3 provider
web3 = Web3(HTTPProvider('http://localhost:8545'))
abi = json.load(open('OpenSesame.json'))

ContractInstance = web3.eth.contract(abi, address="0xeedbebf6802744f2aca25ceee8c671787b6daad1")

filter = ContractInstance.on("UserListUpdate",{})


filter.watch()

#0xeedbebf6802744f2aca25ceee8c671787b6daad1