import React from 'react';
// import './App.css';

function CreateAccount() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex w-full max-w-3xl">
        {/* Left: Login Form */}
        <div className="bg-white p-8 rounded-lg shadow-md w-2/3">
          <div className="text-center mb-8">
            <img src="medicare_logo.png" alt="Medicare Logo" className="max-w-xs mx-auto" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Caregiver Registration</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="full-name" className="block font-semibold mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block font-semibold mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Create your Account
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            By creating an account, you agree to our Terms of Service and Privacy Policy.
          </p>
          <p className="mt-4">
            Already have an account?{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Sign in
            </a>
          </p>
        </div>

        {/* Right: Image Box */}
        <div className="w-1/3 bg-black opacity-30 h-96 rounded-lg ml-4">
          <div className="h-full flex items-center justify-center">
            <p className="text-white text-lg text-center">
              Welcome to our Caregiver Platform!
              <br />
              Connect with families and provide
              <br />
              essential care services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
