import React from 'react'; 

import Api from './../Api/exapi.js';

export default class AddTicket extends React.Component{
constructor(props) {
    super(props)

    // this.state = {
    //   storageTicValue: null
    // }
  }

	// logTickets(e){
	// e.preventDefault(); 
 //    var self = this;
 //    Tickets.getTickets().then((result)=>{
 //      return self.setState({storageTicValue: result.c[0]})
 //    });
 //    console.log(`new state is : ${self.state.storageTicValue}`); 
 //  }

  render() {
  	return (
  	<div className="item">

  	<button className="button" onClick={Api.createTicket.bind(this)}> Create Ticket</button>
  	</div>
); 
  }
}; 