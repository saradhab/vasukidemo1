import axios from 'axios';

const LOAN_API_BASE_URL  = "http://localhost:8080/loan";

class ApiServiceLoan{

    fetchLoan() {
        return axios.get(LOAN_API_BASE_URL );
    }

    fetchLoanById(loanId) {
        console.log("loanId :"+loanId);
        return axios.get(LOAN_API_BASE_URL  + '/' + loanId);
    }

    deleteLoan(loanId) {
        return axios.delete(LOAN_API_BASE_URL  + '/' + loanId);
    }

    addLoan(loan) {
        console.log("addLoan===>");
        console.log("url "+LOAN_API_BASE_URL );
        // console.log("loan "+loan.loanId+" "+loan.firstName+" "+loan.middleName+" "+loan.lastName+ " "+loan.address+" "+loan.emailId+" "+loan.mobileNumber+" "+loan.password);
        return axios.post(""+LOAN_API_BASE_URL , loan)
            .then(response => {console.log(response)})
            .catch(error => console.log(error.response));
    }

    editPayee(loan) {
        return axios.put(LOAN_API_BASE_URL  + '/' + loan.loanId, loan)
    }

}

export default new ApiServiceLoan;