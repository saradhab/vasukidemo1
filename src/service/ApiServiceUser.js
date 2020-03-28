import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/user";

class ApiServiceUser {

    fetchUser() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchUserById(userId) {
        console.log("userid :"+userId);
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

   deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addUser(user) {
        console.log("addUser===>");
        console.log("url "+USER_API_BASE_URL);
       // console.log("user "+user.userId+" "+user.firstName+" "+user.middleName+" "+user.lastName+ " "+user.address+" "+user.emailId+" "+user.mobileNumber+" "+user.password);
        return axios.post(""+USER_API_BASE_URL, user)
            .then(response => {console.log(response)})
            .catch(error => console.log(error.response));
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.userId, user)
    }

}

export default new ApiServiceUser();