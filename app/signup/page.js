"use client";
import LoadingButton from "@/components/buttons/LoadingButton";
import AlreadyAccountLink from "@/components/pageComponents/AlreadyAccountLink";
import { GlobalContext } from "@/services/globalContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signUp, loading, isAuthenticated } = useContext(GlobalContext);
  const router = useRouter();

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const response = await signUp(name, email, password);
    // console.log(response);

    if (response.status === 400) {
      setError(response.data.message);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/profile");
    }
  }, [router, isAuthenticated]);

  return (
    <div className="flex flex-col items-center gap-8 py-20">
      <h1 className="font-dmSerifText text-4xl">Sign up</h1>

      <form onSubmit={handleSignUpSubmit}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label>Name</label>
            <input
              placeholder="Enter your name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-100 px-2 py-1"
            />
          </div>
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
            <LoadingButton text="Continue with email" loading={loading} />
          </div>
        </div>
      </form>

      <AlreadyAccountLink
        text={`Already have an account?`}
        destination={`/login`}
        linkText="Login"
      />

      {!!error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default SignUp;
