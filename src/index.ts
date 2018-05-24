import {contractAddress, contractABI, test_provider}  from '../config/config'
import Web3 = require('web3')
import * as config from '../config/config'
import sqlite = require('./sqlite.js')

let web3 = new Web3(config.test_provider)

interface Contract {
    abi: any,
    address: string
}

let customContract: Contract = {abi: contractABI, address: contractAddress}

function instantiateContract(contract: Contract) : any{
        let contractInstance = new web3.eth.Contract(contract.abi,contract.address)
        return contractInstance
    
}

function getEventList(contractInstance: any, monitorInstance?: boolean){
        let eventNames = []
        let eventIndex = 0

        contractInstance.options.jsonInterface.forEach((interfaceObject, index, array)=>{
            if (interfaceObject.type === 'event')
                console.log('found event ' + interfaceObject.name)


                interfaceObject.inputs.forEach((inputObject, index, array)=>{
                    console.log('input variable name: ' + inputObject.name + ' input type: ' + inputObject.type)
                })
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
 

function logEvents(contractInstance: any, event?: string): any {

        //implement event passing
       return contractInstance.events.UserListUpdate({}, (e,r)=>{
            if(e){'There was an error listening to an event' + console.log(e); return e;}
            if(!e){
                console.log(r)
                console.log(parseEvent(r))
                 logBlockToDB(r.blockHash, r.blockNumber)
                 //logEventToDB('somehash',parseEvent(r))
                 //getEventFromLevelDB('somehash')
            }
        })
}
function logBlockToDB(blockHash: string, blockNumber: IBlock){
    sqlite.addBlock(blockHash, blockNumber)
}
function logEventToDB(event: IEvent){
    sqlite.addBlock(event)

}

function getEventFromLevelDB(hash:string){
    leveldb.get(hash)
}

interface IBlock {
    blockNumber: number,
    blockHash: string,
    
}

interface IEvent extends IBlock{
    transactionHash: string,
    transactionIndex: number,
    returnValues: any,

}



function parseEvent(result: any): IEvent {

    let field: IEvent = {blockNumber: result.blockNumber,
                               blockHash: result.blockHash,
                               transactionHash: result.transactionHash,
                               transactionIndex: result.transactionIndex,
                               returnValues: result.returnValues}
    return field
}



//sqlite.createTables()

let instance = instantiateContract(customContract)
logEvents(instance)
getEventList(instance)

//getPastEvents(instance, 'Transfer',52000000,520000050 )
//getPastEvents(instance, '')