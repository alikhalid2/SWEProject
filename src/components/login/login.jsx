import React from "react";
import loginImg from "../../images/login.jpg";
import api from '../api';


export class Login extends React.Component {
    // constructor (props) {
    //     super (props);
    // }
    state = {
        username: "",
        password: "",
    };

    submitHandler = async e => {
        e.preventDefault();
        if (await api.isInDb(this.state))
        {
            this.props.onLogin(this.state.username);
            console.log('Login Succeded');
        }
        else
            console.log('Login Failed')
    };
    valueHandler = e => {
        //clone
        const clone_state = {...this.state};
        //set value
        clone_state[e.currentTarget.name] = e.currentTarget.value;
        //set state
        this.setState(clone_state);
    };
    render() {
        return (
            <form onSubmit={this.submitHandler}>
            <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Login</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} alt="Login"/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input  value = {this.state.username} 
                                onChange = {this.valueHandler} 
                                type="text" 
                                name="username" 
                                placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input  onChange = {this.valueHandler} 
                                value = {this.state.password}
                                
                                type="password" 
                                name="password" 
                                placeholder="password" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="submit" className="btn">
                Login
                </button>
            </div>
      </div>
      </form>
        );
    }
}