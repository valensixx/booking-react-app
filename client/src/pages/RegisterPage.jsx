import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(e){
    e.preventDefault();
    try{
        await axios.post('/register', {
            name, email, password,
        });
        alert('registration done! Now you can log in now!');
    }catch(e){
        alert('Registration failed. Pleace try again later');
    }
  } 

  return (
    <div className="mt-4 grow flex items-center justify-around">
    <div className="mb-64">
        <h1 className="text-4xl text-center">Register</h1>
        <form className="max-w-md mx-auto mt-2" onSubmit={registerUser}>
            <input type="text" placeholder="Enter your name..." 
                value={name} onChange={e => setName(e.target.value)} 
            />
            <input type="email" placeholder="Enter your@email.com..." 
                value={email} onChange={e => setEmail(e.target.value)}
            />
            <input type="password" placeholder="Enter your password..." 
                value={password} onChange={e => setPassword(e.target.value)}
            />
            <button className="primary">Register</button>
            <div className="text-center text-gray-500 py-2">
                <span>
                    Allready have un account? <Link className="underline text-black" to={'/login'}>Login now</Link>
                </span>
            </div>
        </form>
    </div>
</div>
  );
}

export default RegisterPage;