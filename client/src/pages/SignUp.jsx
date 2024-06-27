import React from 'react';
import './SignUp.css'; // Import the CSS file

export default function SignUp() {
  return (
    <div>
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='username' className='border p-3 rounded-lg' id='username'></input>
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id='email'></input>
        <input type='password' placeholder='password' className='border p-3 rounded-lg' id='password'></input>
      </form>
    </div>
  );
}
