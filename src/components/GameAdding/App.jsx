
import React, { Component } from 'react';
import axios from 'axios';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFile: ''
        }
    }
    changeHandler = (e) => {
        console.log(e.currentTarget.value);
        this.setState({currentFile: e.target.files});

    }
    
    uploadHandler = async (e) => {
        console.log(this.state.currentFile);
        const formData = new FormData();
        for (let i in this.state.currentFile)
        {
            formData.append(i, this.state.currentFile[i])
        }
        formData.append('name', 'ahmed');
        console.log(formData);
        axios.post('/api/test', formData);
    }
    render(){ 
        return(
            <React.Fragment>

                <input  type = "file"
                        name = "gameUpload"
                        onChange = {this.changeHandler} multiple></input>
                <button onClick = {this.uploadHandler}>Upload!!</button>

            </React.Fragment>
    );
    }
}