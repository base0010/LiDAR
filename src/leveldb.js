var levelup = require('levelup')
var leveldown = require('leveldown')
var encoding = require('encoding-down')
 
let dbfile = './database'

const encoded = encoding(leveldown('./database'), {
  valueEncoding: 'json',
})
const levelDb = levelup(encoded)


  export async function put(k, v) {
      await levelDb.put(k, v)
    }
  
  export async function get (k){
    const value = await levelDb.get(k)

    console.log('value type:', typeof v)  
    console.log('value:', v) 
    return k
}
