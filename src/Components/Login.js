import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Header from './Header';
import './style.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    onChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    goToHeader(e) {

    }

    render() {
        return (
            <div>
                <br />
                <form className="box">
                    <h1>Log In</h1>
                    <input
                        className="but"
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={this.onChangeHandler}
                    />

                    <input
                        className="but"
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.onChangeHandler}
                    />

                    <button
                        className="button"
                        type="button"
                        name="submit"
                        placeholder="submit"
                        onClick="./Header.js"
                    >
                        Submit
                    </button>


                </form>
            </div>
        );
    }
}
export default Login;