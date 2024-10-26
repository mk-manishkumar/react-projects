import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            value={email}
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl  outline-none bg-transparent placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            value={password}
            className="border-2  border-emerald-600 rounded-full mt-3 py-3 px-5 text-xl  outline-none bg-transparent placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button type="submit" className="border-none bg-emerald-600 rounded-full mt-5 py-2  text-xl text-white outline-none w-full">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
