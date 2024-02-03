"use client";
import Button from "@/components/buttons/Button";
import AlreadyAccountLink from "@/components/pageComponents/AlreadyAccountLink";
import { signUpApi } from "@/services/globalApi";
import Link from "next/link";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const response = await signUpApi(email, password);
    // console.log(response);

    if (response.status === 400) {
      setError(response.data.message);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="font-dmSerifText text-4xl">Sign up</h1>

      <form onSubmit={handleSignUpSubmit}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input
              placeholder="Enter your email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-100 px-2 py-1"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Password</label>
            <input
              placeholder="Create your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-100 px-2 py-1"
            />
          </div>
          <div className="mt-4">
            <Button text="Continue with email" />
          </div>
        </div>
      </form>

      <AlreadyAccountLink destination={`/login`} linkText="Login" />

      {!!error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default SignUp;
