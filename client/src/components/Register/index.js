import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../../redux_store/reducers/auth/actions';
import { Redirect } from 'react-router-dom';

const Register = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }


  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    register(formData);
  }

  return (
    <div className="row" >
      <div className="col d-flex flex-column align-items-center mt-5">
        <h1 className="text-primary pb-5">Sign Up</h1>
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Control type="text" placeholder="Name" name="name" onChange={onChange} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" onChange={onChange} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
    </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" onChange={onChange} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Create Account
  </Button>
        </Form>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Register);