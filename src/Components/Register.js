import React, { useState } from 'react';
import UserApi from '../apis/UserApi';

const Register = () => {

    const[User, setUser] = useState({
        id: 0,
        UserName: '',        
        email: '',
        password:'',
        role:"ROLE_USER",
        enabled:true
    })

    const handleChange = (event) => {
        setUser({
            ...User,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {

        UserApi.add(User)

        event.preventDefault()
    }

    const clearForm = () => {
        setUser({
            id: 0,
            UserName: '',        
            email: '',
            password:'',
            role:"ROLE_USER",
            enabled:true
        })
    }

    return (
        <div>

            <div className='new-user-form border' 
                 style={{ width: "70%", 
                          margin: "0 auto",
                          padding: "1rem"
                        }}>

                <h2 className="display-5"
                    style={{marginBottom: "1rem"}}
                    >
                    Create user
                </h2>

                <form onSubmit={ handleSubmit } >

                    
                    <div className='mb-3'>
                        <label htmlFor='student-first-name' 
                               className='form-label'>
                            User Name
                        </label>
                        <input className='form-control'
                               type='text'
                               id='username'
                               name='UserName'
                               value={User.UserName}
                               onChange={ handleChange }
                               required
                               />
                    </div>
                    {/* PASSWORD INPUT */}
                    <div className='mb-3'>
                        <label htmlFor='user-password' 
                               className='form-label'>
                            Password
                        </label>
                        <input className='form-control'
                               type='password'
                               id='user-password'
                               name='password'
                               value={User.password}
                               onChange={ handleChange }
                               required
                               />
                    </div>

                    {/* EMAIL INPUT */}
                    <div className='mb-3'>
                        <label htmlFor='student-email' 
                               className='form-label'>
                            Email
                        </label>
                        <input className='form-control'
                               type='email'
                               id='student-email'
                               name='email'
                               value={User.email}
                               onChange={ handleChange }
                               required
                               />
                        <div className='form-text'>
                            You may not use duplicate emails, make sure your email is unique.
                        </div>
                    </div>

                    <button className='btn btn-primary'
                            type='submit'>
                        Create
                    </button>

                    <button className='btn btn-secondary'
                            style={{ marginLeft: "0.5rem" }}
                            onClick={ () => { clearForm() } } 
                            >
                        Clear 
                    </button>

                </form>

            </div>
            

        </div>
    );
};

export default Register;