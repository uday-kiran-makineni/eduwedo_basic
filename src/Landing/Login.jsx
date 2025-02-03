import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Header from './authentiheader.jsx'; // Ensure this path is correct
import Footer from './Footer.jsx'; // Ensure this path is correct
import styles from './Login.module.css'; // Ensure this path is correct
import CryptoJS from 'crypto-js'; // Import crypto-js for encryption

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(`Here : ${process.env.REACT_APP_API_URL}`);


    try {
      const response = await axios.post('http://localhost:8081/api/auth/login', {
        username,
        password,
      });
      console.log(response);

      if (response.status === 200 && response.data) {
        const user = response.data;  // This contains user details like id, username, email, role, etc.

        // Encrypt password before storing it
        const encryptedPassword = CryptoJS.AES.encrypt(password, 'your-secret-key').toString();

        // Store encrypted password, username, roles, and userId in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('userRoles', user.role);  // assuming `role` is returned as a single string, adjust if needed
        localStorage.setItem('userId', user.id);
        localStorage.setItem('password', encryptedPassword); // Store encrypted password

        // Redirect based on roles
        if (user.role === 'ROLE_STUDENT') {
          navigate('/dashboard');  // Redirect to student dashboard
        } else if (user.role === 'ROLE_COLLEGE') {
          navigate('/collegedashboard');  // Redirect to college dashboard (or other role-based dashboard)
        } else {
          navigate('/');  // Default redirect if role is not recognized
        }
      } else {
        setError('Invalid username or password.');
      }
    } catch (error) {
      console.error('Login error', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <Header />
      <div className={styles.appContainer}>
        <h3 className={styles.titletext}>Log in to Dashboard</h3>
        <form onSubmit={handleLogin}>
          <div className={styles.container}>
            <div className={styles.LoginCard}>
              <label>Username</label><br />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
              /><br />
              <label>Password</label><br />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              /><br />
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <button type='submit'>Log in</button>
              <p className={styles.textBelow}>
                Don't have an account? <Link to="/Signup">Sign up</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
