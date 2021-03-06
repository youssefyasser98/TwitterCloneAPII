import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class P404 extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>
                            Error</h1>
                        <h2>
                            404 is Not Found</h2>
                        <div className="error-details">
                            Sorry, an error has occured : Requested page could not be found!
                        </div>
                        <div className="error-actions">
                            <NavLink to="/" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>
                                Home Page </NavLink>
                            <NavLink to="#" className="btn btn-default btn-lg"><span className="glyphicon glyphicon-envelope"></span> Contact Support </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
