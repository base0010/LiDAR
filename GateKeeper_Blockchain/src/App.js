import React, { Component } from 'react'
import './css/App.css'

import Ticket from './Components/Ticket'
import Nav from './Components/Nav'
import QRCode from 'qrcode.react'
import Button from  './Components/Button'
import ReturnEvent from './Components/ReturnEvent'
import DebugLog from './Components/DebugLog'
import Test from './Components/QRReader'


class App extends Component {
  render () {
    return (
      <div className="App">
      	<Nav/>


        <Ticket/>
        <Button/>

        <QRCode value='somegobbldygood' level='H' />
        <Test/>
      </div>
    )
  }
}

export default App
