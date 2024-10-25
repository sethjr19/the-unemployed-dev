'use client';
import { useState } from "react";
import { useRouter } from "next/navigation"; // For redirection after login
import firebase from "../../firebase/firebaseConfig"; // Adjust the path to your firebase config
import { signInWithEmailAndPassword } from "firebase/auth"; // For Firebase auth
import { auth } from "../../firebase/firebaseConfig";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      router.push('/pages/home');
      console.log('user is:', user)
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
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
        {error && <p className="error-text">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
