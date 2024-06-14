import React, { useState } from 'react';
import InputLabel from '../../components/modules/InputLabel';
import Button from '../../components/elements/Button';
import Header from '../../components/elements/Header';
import Error from '../../components/elements/Error';
import FormContainer from '../../components/wrappers/FormContainer';

const SIGNIN_DETAILS = { email: '', password: '' };

function SignIn() {

    const [error, setError] = useState('');
    const [signInDetails, setSignInDetails] = useState(SIGNIN_DETAILS);


    const handleSubmit = (event) => {
        event.preventDefault();

        // check for empty field
        if (email === '' || password === '') {
            setError('Both fields are required');
        }

        alert(email, password)


    };

    const handleChange = (e) => {
        setSignInDetails({ ...signInDetails, [e.target.name]: e.target.value });

    }

    const { email, password } = signInDetails;


    return (
        <FormContainer>
            <Header>Sign In</Header>
            <form onSubmit={handleSubmit}>
                <InputLabel label='Email' id='email' type="email"
                    name='email'
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter your email" />
                <InputLabel label='Password' id='password' type="password"
                    name='password'
                    value={password}
                    onChange={handleChange}
                    placeholder="Enter your password" />
                <Error showError={error} message={error} />
                <Button type="submit">Sign In</Button>
            </form>
        </FormContainer >
    )
}


export default SignIn;
