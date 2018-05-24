from web3 import Web3, HTTPProvider, IPCProvider
#set web3 provider
web3 = Web3(HTTPProvider('http://localhost:8545'))

def main(): 
    getNetworkType()

#some LCD handling function(s) should go here.

def watchAllEvents(contractAddress):
    




def getNetworkType(): 
    blockheight = web3.eth.blockNumber
    chainId = 0; 

    if blockheight < 1000000:
        print ('You are likely on an internal testnet, the blockheight is', blockheight)
        chainId = 0
        
    else:
        print ('You are on the mainnet and blockheight is', blockheight)
        chainId = 1
    return chainId

if __name__ == '__main__':
    main()
