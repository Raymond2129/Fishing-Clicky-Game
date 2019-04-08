//need to setup a reusable navbar component
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render () {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <ul>
                    <li className="itemLeft">Test Your Memory</li>
                    <li className="itemCenter"></li>
                    <li className="itemRight">Score: {this.props.score} | High Score: {this.props.highScore}</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;