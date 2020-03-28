import React, { Component } from 'react'
import ApiServicePayee from "../../service/ApiServicePayee";


class AddPayee extends Component{

    constructor(props){

        super(props);
        this.state ={
            payeeId:'',
            accountId:'',
            payeeAccountNo:'',
            payeePhone:'',
            payeeAddress:'',
            message: ''

        }
        this.savePayee = this.savePayee.bind(this);
    }

    savePayee = (e) => {
        e.preventDefault();
        let payee = {
            payeeId: this.state.payeeId,
            accountId:this.state.accountId,
            payeeAccountNo:this.state.payeeAccountNo,
            payeePhone:this.state.payeePhone,
            payeeAddress:this.state.payeeAddress
            
           };
        const config = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        console.log("payee id: " + payee.payeeId );
        ApiServicePayee.addPayee(payee,config)
            .then(res => {
                console.log("Payee added successfully");
                this.setState({message : 'Payee added successfully.'});
                this.props.history.push('/UserLogin');
            })
            .catch(error => {
                console.log("registration Payee error", error);
            });

    }


    onChange = (e) =>

        this.setState({ [e.target.name]: e.target.value });


    render() {
        return(
            <div>
                <h2 className="text-center">ADD PAYEE</h2>
                <form>
                    <div className="form-group">
                        <label>Payee Id:</label>
                        <input type="number" placeholder="payeeId" name="payeeId" className="form-control" value={this.state.payeeId} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label> Account Id:</label>
                        <input type="number" placeholder="accountId" name="accountId" className="form-control" value={this.state.accountId} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Payee Account No: </label>
                        <input type="number" placeholder="payeeAccountNo" name="payeeAccountNo" className="form-control" value={this.state.payeeAccountNo} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label> Payee Phone No:</label>
                        <input type="number" placeholder="payeePhoneNo" name="payeePhoneNo" className="form-control" value={this.state.payeePhoneNo} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Payee Address:</label>
                        <input type="address" placeholder="payeeAddress" name="payeeAddress" className="form-control" value={this.state.payeeAddress} onChange={this.onChange}/>
                    </div>

                   
                    <button className="btn btn-success" onClick={this.savePayee}>Save</button>
                </form>
            </div>
        );
    }
}

export default AddPayee;