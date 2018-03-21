import {contractAddress, contractABI, test_provider}  from '../config/config'
import Web3 = require('web3')
import * as config from '../config/config'

let web3 = new Web3(config.provider)

interface Contract {
    abi: any,
    address: string
}

let customContract: Contract = {abi: contractABI, address: contractAddress}

function instantiateContract(contract: Contract) : any{
        let contractInstance = new web3.eth.Contract(contract.abi,contract.address)
        return contractInstance
    
}

function getEventList(contractInstance: any){
        let eventNames = []
        let eventIndex = 0

        contractInstance.options.jsonInterface.forEach((interfaceObject, index, array)=>{
            if (interfaceObject.type === 'event')
                console.log('found event' + interfaceObject.name)
                eventNames.push(interfaceObject.name)
                eventIndex++
            if(eventIndex === array.length)
                return eventNames
    })
}

function getPastEvents(contractInstance: any, event: string, _fromBlock?: number, _toBlock?: number): any{
        if(_fromBlock && _toBlock){
        console.log('getting block range ' + _fromBlock + " to " + _toBlock)
        let pastEvents =  contractInstance.getPastEvents(event, {fromBlock: _fromBlock, _toBlock: _toBlock }, (e,r)=> 
        {console.log(r)})
        
        }
    }
 

function logEvents(contractInstance: any, event: string): any {

        //implement event passing
       return contractInstance.events.Transfer({}, (e,r)=>{
            
            if(!e){
               console.log(parseEvent(r))
                //log to leveldb

            }
        })
}

interface EventReciept {
    blockNumber: number,
    blockHash: string,
    transactionHash: string,
    transactionIndex: number,
    returnValues: any,
}

function parseEvent(result: any): EventReciept{

    let field: EventReciept = {blockNumber: result.blockNumber,
                               blockHash: result.blockHash,
                               transactionHash: result.transactionHash,
                               transactionIndex: result.transactionIndex,
                               returnValues: result.returnValues}
    return field
    //console.log(field)

}




let instance = instantiateContract(customContract)
console.log(instance)
logEvents(instance, 'nothing')
//getPastEvents(instance, 'Transfer',52000000,520000050 )
//getPastEvents(instance, '')