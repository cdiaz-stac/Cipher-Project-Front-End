import React, { useState } from 'react';
import UserApi from '../apis/UserApi';

const UserLogin =() => {

    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[showAlert, setShowAlert] = useState(false) 
    const[showAlert2, setShowAlert2] = useState(false) 
    const handleLogin = (event) => {

        const user = {
            "username":username,
            "password":password,
        }

        //make post Request
        //take the product generated and find the id
        // set the id for the alert
        UserApi.authUser(user)
        setShowAlert(true);
        
        event.preventDefault();

    }

    return (
        <div>
            <h2>Login</h2>

            <form onSubmit={handleLogin}>

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

                <button type="submit" className = "btn btn-primary">
                    Login
                </button>
            </form>
            {showAlert && <div className="alert alert-info"> Logged In! </div>} 
            {showAlert2 && <div className="alert alert-info"> Incorrect info! </div>}
            
        </div>
    );


}

export default UserLogin;