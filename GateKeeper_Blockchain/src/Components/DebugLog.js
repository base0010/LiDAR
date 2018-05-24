import React from 'react'; 
import AddTicket from './Button'; 


export default class DebugLog extends React.Component{
constructor(props) {
    super(props)

    this.state = {
      storageTicValue: 0
    }
  }

	logTickets(){

    console.log(`tickets` + AddTicket.state.storageTicValue); 
	
  }

  render() {
  	return (
  	<div className="item">
  	<p> I see {this.logTickets}</p>
  	</div>
); 
  }
}; 