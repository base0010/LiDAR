import React from 'react'; 

import Api from './../Api/exapi.js';

export default class ReturnEvent extends React.Component{
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
 thennable(){
  let a = Api.returnEvent().then((result)=>{return result}); 
  return a; 
 }
  render() {

  	return (
  	<div className="item">

  	<button className="button" onClick={Api.returnEvent.bind(this)}> Create Ticket</button>
    <p className="paragraph"> there are this many tics: {this.thennable()}</p>
  	</div>
); 
  }
}; 