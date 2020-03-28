import React, { Component } from 'react'
import ApiServiceLoan from "../../service/ApiServiceLoan";


class ApplyLoan extends Component{

    constructor(props){

        super(props);
        this.state ={

            loanId:'',
            loanType:'',
            loanAmount:'',
            userId:'',
            accountId:'',
            loanOpenDate:'',
            loanStatus:'',
            loanTerm:'',

            message: ''

        }
        this.saveLoan = this.saveLoan.bind(this);
    }

    saveLoan = (e) => {
        e.preventDefault();
        let loan = {
            loanId: this.state.loanId,
            loanType:this.state.loanType,
            loanAmount:this.state.loanAmount,
            userId:this.state.userId,
            accountId:this.state.accountId,
            loanOpenDate:this.state.loanOpenDate,
            loanStatus:this.state.loanStatus,
            loanTerm:this.state.loanTerm


        };
        const config = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        //console.log("loan id: " + loan.loanId );
        ApiServiceLoan.addLoan(loan,config)
            .then(res => {
                console.log("loan added successfully");
                this.setState({message : 'Loan added successfully.'});
                this.props.history.push('/UserLogin');
            })
            .catch(error => {
                console.log("registration Loan error", error);
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
                        <label>Loan Id:</label>
                        <input type="number" placeholder="loanId" name="loanId" className="form-control" value={this.state.loanId} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label> Loan Type:</label>
                        <input type="text" placeholder="Home/Auto" name="loanType" className="form-control" value={this.state.loanType} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Loan Amount: </label>
                        <input type="number" placeholder="loanAmount" name="loanAmount" className="form-control" value={this.state.loanAmount} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label> User Id:</label>
                        <input type="number" placeholder="userId" name="userId" className="form-control" value={this.state.userId} onChange={this.onChange}/>
                    </div>


                    <div className="form-group">
                        <label> Account Id:</label>
                        <input type="number" placeholder="accountId" name="accountId" className="form-control" value={this.state.accountId} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Loan Open Date: </label>
                        <input type="datetime-local" placeholder="loanOpenDate" name="loanOpenDate" className="form-control" value={this.state.loanOpenDate} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Loan Status: </label>
                        <input type="text" placeholder="loanStatus" name="loanStatus" className="form-control" value={this.state.loanStatus} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Loan Term: </label>
                        <input type="number" placeholder="loanTerm" name="loanTerm" className="form-control" value={this.state.loanTerm} onChange={this.onChange}/>
                    </div>

                    <button className="btn btn-success" onClick={this.saveLoan}>Save</button>
                </form>
            </div>
        );
    }
}

export default ApplyLoan;