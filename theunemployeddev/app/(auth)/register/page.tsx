'use client'
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase/firebaseConfig'
import { getDatabase, ref, set } from "firebase/database";

const Register: React.FC = () => {
  // State for form inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const db = getDatabase();

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!username || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Simulate registration logic (replace with actual API call)
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      const user = response.user
      console.log('user is:', user)
      set(ref(db, 'users/' + user.uid), {
        username: username,
        email: email,
        dateCreated: new Date().toISOString(),
      });
      setSuccess('Registration successful!');
      setError(null);
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (error) {
      setError('Registration failed. Please try again.');
      setSuccess(null);
    }
  };

  return (
    <div className="register-container bg-black">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
    </div>
  );
};

export default Register;
