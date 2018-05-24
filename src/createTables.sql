CREATE TABLE blocks(
	blockHash	TEXT PRIMARY KEY,
	blockNumber	INTEGER 
);
CREATE TABLE blockTransactions(
	transactionHash TEXT PRIMARY KEY,
	blockHash	TEXT, 
	transactionIndex INTEGER,

	FOREIGN KEY(blockHash) REFERENCES blocks(blockHash)
);
CREATE TABLE eventTransactions(
	transactionHash TEXT, 
	emittingContract TEXT, 
	returnValueJSON TEXT, 
	FOREIGN KEY (transactionHash) REFERENCES 			blockTransactions(transactionHash)
	
);