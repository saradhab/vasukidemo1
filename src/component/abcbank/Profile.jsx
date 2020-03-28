import React, {Component} from "react";

class Profile extends Component {
    constructor(props) {
        super(props);
    }
    render(){
    return(
        <div><h2> Welcome to Profile Page</h2>
        <nav>
            <a link href="/Transaction" ><h3>Transaction Details</h3></a>
        </nav>
            <nav>
                <ul><h3>Payee Details</h3>
                   <li><a link href="/AddPayee" ><h4>Add Payee</h4></a></li>
                   <li><a link href="/ListPayee"><h4>List of Payee Details</h4></a></li>
               </ul>
            </nav>
            <nav>
                <ul><h3>Loan Details</h3>
                    <li><a link href="/ApplyLoan" ><h4>Apply for new Loan</h4></a></li>
                    <li><a link href="/ListLoan" ><h4>Existing Loan Details</h4></a></li>
                </ul>
            </nav>
            <nav>
                <a link href="/UserLogin
                " ><h3>Logout</h3></a>
            </nav>
        </div>

    );
    }
}
export default Profile;