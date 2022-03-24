import React from "react";
import loginImg from "../../images/login.jpg";


export class Register extends React.Component {
    // constructor (props) {
    //     super (props);
    // }
    state = {
        username: '',
        email: '',
        passoword: ''
    };
    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Register</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} alt="LOGIN"/>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password"/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="submit" className="btn">Register</button>
                </div>
            </div>
        );
            
    }
}