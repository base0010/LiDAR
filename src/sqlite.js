var sqlite3 = require('sqlite3').verbose();
var fs = require('fs')
var db = new sqlite3.Database('database.sqlite');

export function createTables(){
    let createBlocksTable = 
    `
    CREATE TABLE IF NOT EXISTS blocks(
        blockHash	TEXT PRIMARY KEY,
        blockNumber INTEGER);
        
    `
    let createTransactionsTable = 
    `
    CREATE TABLE IF NOT EXISTS blockTransactions(
        transactionHash TEXT PRIMARY KEY,
        blockHash	TEXT, 
        transactionIndex INTEGER,
    
        FOREIGN KEY(blockHash) REFERENCES blocks(blockHash)
    );
    `
    let createEventTransactionsTable =
    `
        CREATE TABLE IF NOT EXISTS eventTransactions(
            transactionHash TEXT, 
            emittingContract TEXT, 
            returnValueJSON TEXT, 
            FOREIGN KEY (transactionHash) REFERENCES 			blockTransactions(transactionHash)
            
        );
    `
db.serialize(function() {
    db.run(createBlocksTable)
    db.run(createEventTransactionsTable)
    db.run(createTransactionsTable)
    })
}

export function addBlock(blockHash, blockNumber){
    db.serialize(function(){
        let insertBlockSQL = db.prepare(`
        INSERT OR IGNORE INTO blocks VALUES(?,?)`)
        
        insertBlockSQL.run(blockHash, blockNumber, function(r){
            console.log('heres a result' + r)
        })

        insertBlockSQL.finalize(function(e){
            if(e)
            console.log('there was an error' + e)
        })




    })
}

