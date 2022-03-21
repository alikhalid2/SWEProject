import React from "react";
import loginImg from "../../images/login.jpg";


export class Login extends React.Component {
    constructor (props) {
        super (props);
    }
    state = {
        username: '',
        password: '',
        setState: state => {
            this.username = state.username;
            this.password = state.password;
        }
    };
    submitHandler = e => {
        e.preventDefault();
        alert('start here');
        // const xhr = new XMLHttpRequest();
        // xhr.onreadystateChange = () => {
        //     if (xhr.readyState === 4 && xhr.status === 200)
        //     {
        //         alert('yeeh the file is sent successfully.');
        //     }
        //     alert('fuck this is shitttttttttttt.');
        // };
        const responce = fetch('http://localhost:5000/data', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cashe',
            body: JSON.stringify(this.state)
        });
        return responce.json()
        // xhr.open('get', 'http://localhost:5000/data');
        // xhr.send(this.state);
        // alert('please, wait');
    };
    changeValue = e => {
        //clone
        const state = {...this.state};
        //edit
        state[e.currentTarget.name] = e.currentTarget.value;
        console.log('test');
        //set state 
        this.setState(state);
    };
    render() {
        return (
        <form onSubmit={this.submitHandler}>
            <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Login</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input  value = {this.state.username}
                                onChange = {this.changeValue}
                                type="text"
                                name="username"
                                placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input  value = {this.state.password}
                                onChange = {this.changeValue}
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