import React, { useState } from 'react';
import UserApi from '../apis/UserApi';

const UserSignUp = (props) => {

    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState("")
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[email, setEmail] = useState("")
    const[role] = useState("ROLE_USER")
    const[premium] = useState(false)
    const[enabled] = useState(true)
    const[showAlert, setShowAlert] = useState(false) 
    const[loggedIn, setLoggedIn] = useState(true)

    const handleSignIn = (event) => {

        const user = {
            "name":firstName,
            "lastName":lastName,
            "username":username,
            "password":password,
            "email":email,
            "role": role,
            "premium":premium,
            "enabled":enabled
        }

        //make post Request
        //take the product generated and find the id
        // set the id for the alert
        UserApi.createUser(user)
        console.log("reached")

        setShowAlert(true);
        props.setLoggedIn(false);

        event.preventDefault();

    }

    return (
        <div>
            <h2>Sign Up</h2>

            <form onSubmit={handleSignIn}>
                <div className='mb-3'>
                    <label htmlFor='prod-firstName' className='form-label'>First Name</label>
                    <input type="text" className = 'form-control' id='prod-firstName'  value={firstName}
                    onChange={(event) => { setFirstName(event.target.value)}}/>
                </div>

                <div className='mb-3'>
                    <label htmlFor='prod-lastName' className='form-label'>Last Name</label>
                    <input type="text" className = 'form-control' id='prod-lastName'  value={lastName}
                    onChange={(event) => { setLastName(event.target.value)}}/>
                </div>

                <div className='mb-3'>
                    <label htmlFor='prod-username' className='form-label'>Username</label>
                    <input type="text" className = 'form-control' id='prod-username' required value={username}
                    onChange={(event) => { setUsername(event.target.value)}}/>
                </div>

                <div className='mb-3'>
                    <label htmlFor='prod-password' className='form-label'>Password</label>
                    <input type="password" className = 'form-control' id='prod-password' required
                    name = "prod-password" value = {password} onChange ={(event) => { setPassword(event.target.value)}}/>
                </div>

                <div className='mb-3'>
                    <label htmlFor='prod-email' className='form-label'>Email</label>
                    <input type="text" className = 'form-control' id='prod-email' required
                    name = "prod-email" value = {email} onChange ={(event) => { setEmail(event.target.value)}} />
                </div>

                

                <button type="submit" className = "btn btn-primary">
                    Create
                </button>
            </form>
            {showAlert && <div className="alert alert-info"> User created with name = {username} </div>}
            
        </div>
    );

}

export default UserSignUp;