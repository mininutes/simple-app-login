import React, { Component } from 'react';
import Input from 'react-phone-number-input/input'
import './Login.css';

export default class Login extends Component {
    constructor(){
        super();
    }
    
    render (){
        return (
            <div className="Login-container">
                <div className="Login-card">
                    <div className="Login-card-deep">
                        <div className="Login-header">
                            <div>
                                <h5 className="Login-header">Welcome</h5>
                            </div>
                        </div>
                        <form onSubmit={this.onSubmit}>
                            <div className="Login-input">
                                <label>Phone</label>
                                
                                <Input
                                    id="phone"
                                    type="text"
                                    country="ID"/>
                            </div>
                            <div className="Login-input">
                                <label>Password</label>
                                <input
                                    onChange={this.onChange}
                                    id="password"
                                    type="password"
                                />
                            </div>
                            <button>SIGN IN</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}