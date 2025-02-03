import React, { useState } from 'react';
import axios from 'axios';
import Header from './authentiheader';
import Footer from './Footer';
import RoleSelection from './RoleSelection';
import SignupForm from './SignupForm';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [showRoleSelection, setShowRoleSelection] = useState(true);
  const [selectedRole, setSelectedRole] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setShowRoleSelection(false);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const signupData = {
      username: name,
      email,
      phone,
      password,
      role: selectedRole === 'student' ? 'ROLE_STUDENT' : 'ROLE_COLLEGE'
    };

    axios.post('http://localhost:8081/api/auth/register', signupData)
  .then((response) => {
    console.log('Response:', response);
    if (response.data === 'User registered successfully!') {
      console.log('Signup successful:', response.data);
      navigate('/login');
    } else {
      setError('Signup failed. Please try again.');
    }
  })
  .catch((error) => {
    console.error('Error during signup:', error);
    if (error.response) {
      console.error('Response error:', error.response);
      setError(`Error: ${error.response.status} - ${error.response.data}`);
    } else {
      setError('An error occurred during signup. Please try again later.');
    }
  });

  };

  return (
    <>
      <Header />
      {showRoleSelection ? (
        <RoleSelection onRoleSelect={handleRoleSelect} />
      ) : selectedRole && (
        <SignupForm
          name={name}
          email={email}
          phone={phone}
          password={password}
          confirmPassword={confirmPassword}
          error={error}
          onNameChange={(e) => setName(e.target.value)}
          onEmailChange={(e) => setEmail(e.target.value)}
          onPhoneChange={(e) => setPhone(e.target.value)}
          onPasswordChange={(e) => setPassword(e.target.value)}
          onConfirmPasswordChange={(e) => setConfirmPassword(e.target.value)}
          onSubmit={handleSignup}
          role={selectedRole}
        />
      )}
      <Footer />
    </>
  );
}

export default Signup;
