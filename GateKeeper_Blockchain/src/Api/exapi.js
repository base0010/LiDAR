import LegitTic from './../../build/contracts/LegitTic.json'
import Web3 from 'web3'



 const provider = new Web3.providers.HttpProvider('http://192.168.41.29:8545')
    const contract = require('truffle-contract')
    const legitTic = contract(LegitTic)
    legitTic.setProvider(provider)

    // Get Web3 so we can get our accounts.
    const web3RPC = new Web3(provider)

    // Declaring this for later so we can chain functions on legitTic.
    var legitTicInstance
    var accounts; 

    // Get accounts.
    web3RPC.eth.getAccounts(function(error, acc) {
      console.log(acc); 
      accounts = acc; 

    }); 



export default class {
  constructor(){
    this.messages =[]; 

  }


 static createTicket(){
	return(
legitTic.deployed().then((instance)=>{
      legitTicInstance = instance; 
      return legitTicInstance.newTicket([accounts[0]], 'Marcus', {from: accounts[0], gas:500000})
    }))
}

  static getTickets (){
    return(
    legitTic.deployed().then((instance)=>{
      legitTicInstance = instance;
      return legitTicInstance.getNumTickets.call(accounts[0], {from:accounts[0]})
    }))
}
  static returnEvent(){
     return(
    legitTic.deployed().then((instance)=>{
      legitTicInstance = instance;
      return legitTicInstance.getLegitTic.call(accounts[0], {from:accounts[0]})
    }))

  }

}
