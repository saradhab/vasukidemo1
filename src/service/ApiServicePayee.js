import axios from 'axios';

const PAYEE_API_BASE_URL  = "http://localhost:8080/billPayee";

class ApiServicePayee {

    fetchPayee() {
        return axios.get(PAYEE_API_BASE_URL );
    }

    fetchPayeeById(payeeId) {
        console.log("payeeId :"+payeeId);
        return axios.get(PAYEE_API_BASE_URL  + '/' + payeeId);
    }

    deletePayee(payeeId) {
        return axios.delete(PAYEE_API_BASE_URL  + '/' + payeeId);
    }

    addPayee(payee) {
        console.log("addPayee===>");
        console.log("url "+PAYEE_API_BASE_URL );
        // console.log("payee "+payee.payeeId+" "+payee.firstName+" "+payee.middleName+" "+payee.lastName+ " "+payee.address+" "+payee.emailId+" "+payee.mobileNumber+" "+payee.password);
        return axios.post(""+PAYEE_API_BASE_URL , payee)
            .then(response => {console.log(response)})
            .catch(error => console.log(error.response));
    }

    editPayee(payee) {
        return axios.put(PAYEE_API_BASE_URL  + '/' + payee.payeeId, payee)
    }

}

export default new ApiServicePayee();