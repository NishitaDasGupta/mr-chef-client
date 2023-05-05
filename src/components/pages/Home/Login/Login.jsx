import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../../../Providers/AuthProviders';
const Login = () => {
    const { signInUser, googleSignInUser,githubSignInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const from = location.state?.from?.pathname || "/";
        console.log(email, password);
        signInUser(email, password)
            .then((result) => {
                const loggedUser = result.user;
                setSuccess('Successfully Login!')
                setError('');
                form.reset();
              navigate(from,{replace:true});
            })
            .catch((error) => {
                setError(error.message);
                setSuccess('');
            });
    }
    const handleGoogle = () => {
        const from = location.state?.from?.pathname || "/";
        console.log(from);
        googleSignInUser()
            .then((result) => {
                const googleUser = result.user;
                setSuccess('Successfully Login with Google!')
                setError('');
                navigate(from,{replace:true});
            })
            .catch((error) => {
                setError(error.message);
                setSuccess('');
            })
    }
    const handleGithub = () => {
        const from = location.state?.from?.pathname || "/";
        console.log(from);
        githubSignInUser()
            .then((result) => {
                const githubUser = result.user;
                setSuccess('Successfully Login with Github!')
                setError('');
                navigate(from,{replace:true});
            })
            .catch((error) => {
                setError(error.message);
                setSuccess('');
            })
    }
    return (

        <Container className='w-75 mt-4 mb-5' >
            <h1 className=''>Please Login</h1>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button className='w-100 mb-3' variant='secondary' type="submit">
                    Log in
                </Button>
                <div className='d-flex '
                >
                    <Button className='w-100 me-3' onClick={handleGoogle} variant='outline-secondary' type="submit">
                        <FaGoogle /> Login with Google
                    </Button>
                    <Button className='w-100'   onClick={handleGithub} variant='outline-secondary' type="submit"><FaGithub /> Login with GitHub
                    </Button>
                </div>
                <Form.Text className='text-danger'>
                    {error} <br />
                </Form.Text>
                <Form.Text className='text-success'>
                    {success}  <br />
                </Form.Text>
                <Form.Text>
                  <Link to="/register">Don't have an account? Register</Link>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;