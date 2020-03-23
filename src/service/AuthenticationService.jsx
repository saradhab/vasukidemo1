import axios from 'axios'
const API_URL = 'http://localhost:8080/user';
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

class AuthenticationService {
    executeBasicAuthenticationService(userId, password) {
        return true
        //return axios.get(`${API_URL}/basicauth`,
        //    { headers: { authorization: this.createBasicAuthToken(userId, password) } })
    }
    executeJwtAuthenticationService(userId, password) {
        console.log(userId);
        return axios.post(`${API_URL}/userId`, {
            userId,
            password
        })
    }
    createBasicAuthToken(userId, password) {
        return 'Basic ' + window.btoa(userId + ":" + password)
    }
    registerSuccessfulLogin(userId, password) {
        //let basicAuthHeader = 'Basic ' +  window.btoa(userId + ":" + password)
        //console.log('registerSuccessfulLogin')
        console.log("registerSuccessfulLogin ======> "+ userId)
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, userId)
        this.setupAxiosInterceptors(this.createBasicAuthToken(userId, password))
    }
    registerSuccessfulLoginForJwt(userId, token) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, userId)
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }
    createJWTToken(token) {
        return 'Bearer ' + token
    }
    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }
    isUserLoggedIn() {
        //let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        //if (user === null) return false
        return true
    }
    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return ''
        return user
    }
    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}
export default new AuthenticationService();