import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLoginSubmit(e) {
        e.preventDefault();
        try {
            await axios.post('/login', {email, password});
            alert('You are now logged in!');
        } catch (e) {
            alert('Login error! Try again.');
        }
    }

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center">Login</h1>
                <form className="max-w-md mx-auto mt-2" onSubmit={handleLoginSubmit}>
                    <input type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <input type="password"
                        placeholder="password..."
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                    <button className="primary">Login</button>
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