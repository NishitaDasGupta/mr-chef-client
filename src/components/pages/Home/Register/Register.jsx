import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../../../Providers/AuthProviders';
const Register = () => {
    const { createUser, updateProfileUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        if (password.length < 6) {
            setError("Please Enter atleast 6 characters.")
            setSuccess('');
            return;
        }
        // console.log(name, photo, email, password);
        createUser(email, password)
            .then((result) => {
                const registeredUser = result.user;
                updateProfileUser(result.user, name, photo);
                console.log(registeredUser);
                setSuccess('Successfully Registered!');
                setError('');
                form.reset();
                navigate("/");
            
                
            })
            .catch((error) => {
                setError(error.message);
                setSuccess('');

            });

    }
    return (
        <Container className='w-50 mt-4 mb-5' >
            <h1 className=''>Please Register</h1>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter your photo" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button className='w-100' variant='secondary' type="submit">
                    Register
                </Button>
                <Form.Text className='text-danger'>
                    {error} <br />
                </Form.Text>
                <Form.Text className='text-success'>
                    {success} <br />
                </Form.Text>
                <Form.Text>
                    Already have an account? Please <Link to="/login">Log in</Link>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;