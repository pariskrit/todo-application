import React, { useContext, useState } from 'react';
import InputLabel from '../../components/modules/InputLabel';
import Button from '../../components/elements/Button';
import Header from '../../components/elements/Header';
import Error from '../../components/elements/Error';
import FormContainer from '../../components/wrappers/FormContainer';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { ROUTES } from '../../helpers/constants';

const SIGNUP_DETAILS = { email: '', username: '', password: '', confirmPassword: '' }

function SignUp() {

    const [error, setError] = useState('');
    const [signUpDetails, setSignUpDetails] = useState(SIGNUP_DETAILS);
    const [users, setUsers] = useContext(UserContext);
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();

        // check for empty field
        if (email === '' || username === '' || password === '' || confirmPassword === '') {
            setError('All fields are required');
            return;
        }
        //  Check if password and confirm password match
        if (password !== confirmPassword) {
            setError("Passwords don't match")
            return;
        }

        setUsers([...users, { email, password, username }])

        navigate(ROUTES.signin);

    };

    const handleChange = (e) => {
        setSignUpDetails({ ...signUpDetails, [e.target.name]: e.target.value });

    }

    const { email, password, username, confirmPassword } = signUpDetails;


    return (
        <FormContainer>
            <Header>Sign Up</Header>
            <form onSubmit={handleSubmit}>
                <InputLabel label='Email' id='email' type="email"
                    name='email'
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter your email" />
                <InputLabel label='Username' id='username' type="text"
                    name='username'
                    value={username}
                    onChange={handleChange}
                    placeholder="Enter your username" />
                <InputLabel label='Password' id='password' type="password"
                    name='password'
                    value={password}
                    onChange={handleChange}
                    placeholder="Enter your password" />
                <InputLabel label='Confirm Password' id='confirmPassword' type="password"
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password" />

                <Error showError={error} message={error} />

                <Button type="submit">Sign Up</Button>
                <p>
                    Already have an account? <Link to="/">Sign In</Link>
                </p>
            </form>
        </FormContainer >
    );
}

export default SignUp;
