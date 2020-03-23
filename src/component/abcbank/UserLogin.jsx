import React, { Component } from 'react'

import ApiService from "../../service/ApiService";


class UserLogin extends Component {
    constructor(props){
        super(props);
        this.state ={
            userId: '',
            password: '',
            message: null
        }
    }
    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    loginClicked =(e) =>{
        e.preventDefault();
        let userId = this.state.userId;

        const config = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        console.log("user id: " + userId);

    ApiService.fetchUserById(userId, config)
        .then(res => {
            console.log("get user id call success " );

            if (this.state.password === res.data.password) {
                console.log("authentication success");
                this.props.history.push(`/Profile`)
            } else {
                alert('User Id or Password Invalid.');
                this.setState({message : 'User Id or Password Invalid.'});
                this.setState({userId : ''});
                this.setState({password : ''});
                console.log("Login failed, go back to login again");
                this.props.history.push(`/UserLogin`)
            }
        })
        .catch(() => {
            alert('User Id or Password Invalid.');
            this.setState({message : 'User Id or Password Invalid.'});
            this.setState({userId : ''});
            this.setState({password : ''});
            this.props.history.push(`/UserLogin`)});
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Login</h2>
                <form >


                    <div className="form-group">
                        <label>Login Id:</label>
                        <input type="text" placeholder="userId"  name="userId" className="form-control" value={this.state.userId} onChange={this.onChange} />

                    </div>

                    <div className="form-group">
                        <label>Password:</label>
                        <input type="text" placeholder="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange}/>
                    </div>

                    <button  className="btn btn-success" onClick={this.loginClicked}>Login</button>
                    <a link href="/Registration" >SIGN UP</a>

                </form >
            </div>
        );
    }

}

export default UserLogin;