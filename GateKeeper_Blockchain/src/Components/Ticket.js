import React, { Component } from 'react'
import Api from './../Api/exapi.js'; 

import './../css/oswald.css'
import './../css/open-sans.css'
import './../css/pure-min.css'
import './../css/App.css'

class Ticket extends Component {
  constructor(props) {
    super(props)

    this.state = {
      storageTicValue: null
    }
  }

  ticketDisplay() {
let self = this;
   
 Api.getTickets().then((value)=>{return self.setState({storageTicValue: value.c[0]})}); 

   //   legitTic.deployed().then(function(instance) {
    //     legitTicInstance = instance; 

    //     // Stores a value of 5.
    //     return legitTicInstance.newTicket(accounts[0], 'shitshow', {from: accounts[0]})
    //   }).then(function(result) {
    //     // Get the value from the contract to prove it worked.
    //     return legitTicInstance.getNumTickets.call(account, {from: account})
    //   }).then(function(result) {
    //     // Update state with the result.
    //     return self.setState({ storageValue: result.c[0] })
    //   })
    // }
    
  }

  render() {
    this.ticketDisplay(); 
    return (
      <div className="App">
        
        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1>Debugging</h1>
              <p>Some Debugging infos:</p>
              
              
              <p>The Number of Tickets issued is: {this.state.storageTicValue}</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Ticket
