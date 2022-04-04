import React from "react";
import loginImg from "../../images/login.jpg";
import api from "../api";


export class Register extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
    }
    
    
    changeHandler = e=>{
     //console.log(e.currentTarget.value);
     //clone
     const stateClone = {...this.state};
     //set vallue
     stateClone[e.currentTarget.name]=e.currentTarget.value;
     //set state
     this.setState(stateClone);
    }
    submitHandler = async e => {
        e.preventDefault();
        if (await api.addNewUser(this.state))
            console.log('register Succeded');
        else
            console.log('register Failed')
    };
    render() {
        console.log(this.props);
        return (
            <form onSubmit={this.submitHandler}>
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Register</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} alt="LOGIN"/>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input value={this.state.username} 
                                    onChange={this.changeHandler}
                                    type="text" 
                                    name="username" 
                                    placeholder="username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input value={this.state.email} 
                                    onChange={this.changeHandler}
                                    type="email" 
                                    name="email" 
                                    placeholder="email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input value={this.state.password} 
                                    onChange={this.changeHandler}
                                    type="password" 
                                    name="password" 
                                    placeholder="password"/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="submit" className="btn">Register</button>
                </div>
            </div>
            </form>
        );
            
    }
}