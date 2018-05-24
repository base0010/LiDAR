import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Nav extends Component{
 constructor(props) {
    super(props)
}
	render(){
		return (

		<div>
		<nav className="navbar pure-menu pure-menu-horizontal">
            <a href="#" className="pure-menu-heading pure-menu-link">Truffle Box</a>
            {<ul className="pure-menu-list">
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Tickets</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">QR</a></li>
            </ul>}
        </nav>
        </div>
        )
    }
 }
export default Nav
