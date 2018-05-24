import React, { Component } from 'react'
import {ticketDiddle} from './exapi.js'; 

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class Ticket extends Component {
  constructor(props) {
    super(props)

    this.state = {
      storageTicValue: null
    }
  }

  componentWillMount() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */

    // So we can update state later.
    var self = this

    // Get the RPC provider and setup our legitTic contract.
   

    ticketDiddle().then((result)=>{
      return self.setState({storageTicValue: result.c[0]})
    });

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
    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
            <a href="#" className="pure-menu-heading pure-menu-link">Truffle Box</a>
            {<ul className="pure-menu-list">
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Event Info</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Tickets</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">QR</a></li>
            </ul>}
        </nav>

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
