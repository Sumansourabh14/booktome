import Button from "@/components/buttons/Button";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="font-dmSerifText text-4xl">Sign up</h1>

      <form>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input
              placeholder="Enter your email address"
              type="email"
              className="bg-gray-100 px-2 py-1"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Password</label>
            <input
              placeholder="Create your password"
              type="password"
              className="bg-gray-100 px-2 py-1"
            />
          </div>
          <div className="mt-4">
            <Button text="Continue with email" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
