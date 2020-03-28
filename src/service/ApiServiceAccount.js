import axios from 'axios';

const ACCOUNT_API_BASE_URL = "http://localhost:8080/account";

class ApiServiceAccount {

    fetchAccount() {
        return axios.get(ACCOUNT_API_BASE_URL);
    }

    fetchAccountById(accountId) {
        console.log("userid :"+accountId);
        return axios.get(ACCOUNT_API_BASE_URL + '/' + import axios from 'axios';

        const ACCOUNT_API_BASE_URL = "http://localhost:8080/account";

        class ApiServiceAccount {

            fetchAccount() {
                return axios.get(ACCOUNT_API_BASE_URL);
            }

            fetchAccountById(accountId) {
                console.log("userid :"+accountId);
                return axios.get(ACCOUNT_API_BASE_URL + '/' + accountId);
            }

            deleteAccount(accountId) {
                return axios.delete(ACCOUNT_API_BASE_URL + '/' + accountId);
            }

            addAccount(account) {
                console.log("addUser===>");
                console.log("url "+ACCOUNT_API_BASE_URL);
                // console.log("user "+user.accountId+" "+user.firstName+" "+user.middleName+" "+user.lastName+ " "+user.address+" "+user.emailId+" "+user.mobileNumber+" "+user.password);
                return axios.post(""+ACCOUNT_API_BASE_URL, user)
                    .then(response => {console.log(response)})
                    .catch(error => console.log(error.response));
            }

            editAccount(account) {
                return axios.put(ACCOUNT_API_BASE_URL + '/' + user.accountId, user)
            }

        }

        export default new ApiServiceAccount();accountId);
    }
}

export default new ApiServiceAccount();