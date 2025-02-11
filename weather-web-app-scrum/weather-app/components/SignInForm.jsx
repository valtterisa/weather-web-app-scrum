import React, { useState } from 'react';
import Link from 'next/link';
import { signIn, providers } from 'next-auth/react';

function SignInForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Passing credentials trough signIn
    await signIn('credentials', {
      redirect: false,
      email: username,
      password: password,
      // redirect to protected route here(?)
      // callbackUrl: '/',
    })
      .then((error) => console.log(error))
      .catch((error) => console.log(error));
  };
  return (
    <div className="text-white">
      <h1 className="text-xl text-center p-3">Kirjaudu sisään</h1>

      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          className="mb-2 p-2 rounded text-black"
          type="email"
          placeholder="Sähköposti"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          className="mb-2 p-2 rounded text-black"
          type="password"
          placeholder="Salasana"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className="flex justify-between w-full">
          <button className="w-[45%] text-white p-2 rounded bg-blue-700 hover:bg-blue-800 focus:ring-400 focus:ring-blue-300 font-medium bg-gradient-to-r from-pink-300 to-purple-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <Link href={'/auth/signup'}>Luo tili</Link>
          </button>
          <button
            className="w-[45%] text-white p-2 rounded bg-blue-700 hover:bg-blue-800 focus:ring-400 focus:ring-blue-300 font-medium bg-gradient-to-r from-pink-300 to-purple-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
          >
            Kirjaudu
          </button>
        </div>
      </form>
      <hr />
      <div></div>
    </div>
  );
}

export default SignInForm;
