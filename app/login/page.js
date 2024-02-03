"use client";
import Button from "@/components/buttons/Button";
import AlreadyAccountLink from "@/components/pageComponents/AlreadyAccountLink";
import { GlobalContext } from "@/services/globalContext";
import { useContext, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useContext(GlobalContext);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const response = await login(email, password);
    console.log(response);

    if (response.status === 400) {
      setError("Please give email and password");
    } else if (response.status === 401) {
      setError("Incorrect email or password");
    }
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="font-dmSerifText text-4xl">Login</h1>

      <form onSubmit={handleLoginSubmit}>
        <div className="flex flex-col gap-4 items-center">
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
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-100 px-2 py-1"
            />
          </div>
          <div className="mt-4">
            <Button text="Login" />
          </div>
        </div>
      </form>

      <AlreadyAccountLink destination={`/signup`} linkText="Sign up" />

      {!!error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Login;
