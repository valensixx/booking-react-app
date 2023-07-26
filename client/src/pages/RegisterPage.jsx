import React from 'react';

const RegisterPage = () => {
  return (
    <div className="mt-4 grow flex items-center justify-around">
    <div className="mb-64">
        <h1 className="text-4xl text-center">Register</h1>
        <form className="max-w-md mx-auto mt-2">
            <input type="email" placeholder="your@email.com" />
            <input type="password" placeholder="password..." />
            <button className="primary">Login</button>
            <div className="text-center text-gray-500 py-2">
                <span>
                    Do not have account? <Link className="underline text-black" to={'/register'}>Register now</Link>
                </span>
            </div>
        </form>
    </div>
</div>
  );
}

export default RegisterPage;