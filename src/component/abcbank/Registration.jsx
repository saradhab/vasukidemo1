import React, { Component } from 'react'
import ApiService from "../../service/ApiServiceUser";


class Registration extends Component{

    constructor(props){

        super(props);
        this.state ={
           users: [],
            userId:'',
            firstName:'',
            middleName:'',
            lastName:'',
            address:'',
            emailId:'',
            mobileNumber:'',
            password:'',
            message: 'user test'
            
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {userId: this.state.userId,
                    firstName: this.state.firstName,
                    middleName: this.state.middleName,
                    lastName: this.state.lastName,
                    address: this.state.address,
                    emailId: this.state.emailId,
                    mobileNumber: this.state.mobileNumber,
                    password: this.state.password};
        const config = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        console.log("user id: " + user.userId + "firstName" + user.firstName);
        ApiService.addUser(user,config)
            .then(res => {
                console.log("User added successfully");
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/UserLogin');
            })
            .catch(error => {
                console.log("registration error", error);
            });

    }


    onChange = (e) =>

        this.setState({ [e.target.name]: e.target.value });


    render() {
        return(
            <div>
                <h2 className="text-center">REGISTRATION</h2>
                <form>
                    <div className="form-group">
                        <label>User Id:</label>
                        <input type="number" placeholder="userId" name="userId" className="form-control" value={this.state.userId} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label> First Name:</label>
                        <input type="text" placeholder="firstName" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label> Middle Name:</label>
                        <input type="text" placeholder="middleName" name="middleName" className="form-control" value={this.state.middleName} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label> LastName:</label>
                        <input type="text" placeholder="lastName" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label> Address:</label>
                        <input type="address" placeholder="address" name="address" className="form-control" value={this.state.address} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label> Email Id:</label>
                        <input type="email" placeholder="emailId" name="emailId" className="form-control" value={this.state.emailId} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label> Mobile Number:</label>
                        <input type="number" placeholder="mobileNumber" name="mobileNumber" className="form-control" value={this.state.mobileNumber} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label> Password:</label>
                        <input type="password" placeholder="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange}/>
                    </div>
                    <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                </form>
            </div>
        );
    }
}

export default Registration;