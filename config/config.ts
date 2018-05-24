export const contractAddress = '0xc1931822f95ec86bf5b7c7fb56904a20b5cdef83';
export const contractABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "lastUpdate",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "permissions",
          "type": "string"
        }
      ],
      "name": "UserListUpdate",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "user",
          "type": "address"
        },
        {
          "name": "permissions",
          "type": "string"
        }
      ],
      "name": "updateUser",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
export const provider = 'wss://rinkeby.infura.io/ws';
export const test_provider = 'ws://127.0.0.1:8546'


//rinkeby address = 0x7406ba55fe2c996ebd4a73198139b6951cf2cbc6
