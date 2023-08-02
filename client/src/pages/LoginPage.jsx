import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { UserContext } from '../UserContext';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState(null); // To handle login errors

    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    async function handleLoginSubmit(e) {
        e.preventDefault();
        try {
            const { data } = await axios.post('/login', { email, password });
            setUser(data);
            alert('You are now logged in!');
            setRedirect(true);
        } catch (error) {
            setError('Login error! Please check your credentials.');
        }
    }

    // Step 1: Use useEffect to perform conditional redirect
    useEffect(() => {
        if (redirect) {
            navigate('/');
        }
    }, [redirect, navigate]);

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center">Login</h1>
                <form className="max-w-md mx-auto mt-2" onSubmit={handleLoginSubmit}>
                    <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="password..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className="primary">Login</button>
                    {error && <div className="text-center text-red-500 py-2">{error}</div>}
                    <div className="text-center text-gray-500 py-2">
                        <span>
                            Do not have an account? <Link className="underline text-black" to={'/register'}>Register now</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
