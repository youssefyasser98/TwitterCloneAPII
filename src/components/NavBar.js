import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import Profile from './Profile';

export default class NavBar extends Component {
    render() {
     
        return (
          <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
             <div className="container">
             <Link  className="nav-link navbar-brand" to='/questions/answred'>Game</Link>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul className="navbar-nav mr-auto">
                      <li className="nav-item ">
                      <NavLink  activeClassName="active" to="/questions/answred"  className="nav-link">Home</NavLink>
                      </li>
                      <li className="nav-item">
                      <NavLink  activeClassName="active" to="/add"  className="nav-link">New Question</NavLink>
                      </li>
                      <li className="nav-item">
                      <NavLink  activeClassName="active" to="/leaderboard"  className="nav-link">LeaderBoard</NavLink>
                      </li>
                   </ul>
                     <Profile  />
                </div>
             </div>
          </nav>
          <hr />
       </div>
        )
    }
}

