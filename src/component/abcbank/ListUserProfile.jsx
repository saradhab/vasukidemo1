import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListUserProfile extends Component {

    constructor(props) {
        console.log("Loading Properties");
        super(props)
        this.state = {
            users: [],
            message: null
        }
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.reloadUserList = this.reloadUserList.bind(this);
        console.log("user State");
        console.log(this.state.users);
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList() {
        ApiService.fetchUser()
            .then((res) => {
               // this.state.users=res.data.result
                this.setState({users: res.data})
            });
    }

    deleteUser(id) {
        ApiService.deleteUser(id)
            .then(res => {
                this.setState({message : 'User deleted successfully.'});
                this.setState({users: this.state.users.filter(user => user.userId !== id)});
            })

    }

    editUser(id) {
        window.localStorage.setItem("id", id);
        this.props.history.push('/edit-user');
    }

    addUser() {
        window.localStorage.removeItem("id");
        this.props.history.push('/Registration');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">User Profile</h2>
                <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addUser()}> Add User </button>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th> UserId</th>
                        <th> First Name</th>
                        <th> Middle Name</th>
                        <th> Last Name</th>
                        <th> Address</th>
                        <th> EmailId</th>
                        <th> Mobile Number</th>
                        <th> Password</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map(
                            user =>
                                <tr key={user.id}>
                                    <td>{user.userId}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.middleName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.address}</td>
                                    <td>{user.emailId}</td>
                                    <td>{user.mobileNumber}</td>
                                    <td>{user.password}</td>


                                    <td>
                                        <button className="btn btn-success" onClick={() => this.deleteUser(user.id)}> Delete</button>
                                        <button className="btn btn-success" onClick={() => this.editUser(user.id)} style={{marginLeft: '20px'}}> Edit</button>
                                    </td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }

}


export default ListUserProfile;