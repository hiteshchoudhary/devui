const SocialLogin = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <header className="fixed top-0 z-10 mx-auto flex w-full max-w-full items-center justify-between border-b-[1px] border-b-slate-300 bg-[#121212] p-4 text-white lg:px-10">
        <h1 className="text-xl font-extrabold md:text-3xl">Login</h1>
        <div className="flex w-max flex-shrink-0 items-center justify-end gap-6">
          <button className="hidden w-max items-center justify-center border-[1px] border-white p-3 text-center font-bold text-white md:inline-flex">
            Register
          </button>
        </div>
      </header>
      <div className="mx-auto flex w-full items-stretch justify-between gap-10">
        <div className="mx-auto mt-28 flex w-full flex-col items-start justify-start p-6 sm:max-w-4xl lg:px-10">
          <div className="w-full text-center">
            <h1 className="mb-3 text-5xl font-extrabold text-white">Login</h1>
            <p className="text-xs text-slate-400">
              Login to access your account
            </p>
          </div>
          <div className="my-14 flex w-full flex-col items-start justify-start gap-4">
            <div className="flex w-full flex-col items-start justify-start gap-2">
              <label className="text-xs text-slate-200">
                Username or email
              </label>
              <input
                placeholder="Enter a username or email..."
                autoComplete="false"
                className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
              />
            </div>

            <div className="flex w-full flex-col items-start justify-start gap-2">
              <label className="text-xs text-slate-200">Password</label>
              <input
                placeholder="Enter a password..."
                autoComplete="false"
                type="password"
                className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
              />
            </div>

            <div className="mr-4 flex items-center">
              <input
                type="checkbox"
                id="checkbox-2"
                name="checkbox-2"
                className="absolute h-6 w-6 cursor-pointer opacity-0 [&:checked+div]:bg-green-500 [&:checked+div_svg]:block"
              />
              <div className="mr-2 flex h-6 w-6 flex-shrink-0 items-center justify-center border-[1px] border-white bg-transparent focus-within:border-white">
                <svg
                  className="pointer-events-none hidden h-3 w-3 fill-current text-white"
                  version="1.1"
                  viewBox="0 0 17 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <g
                      transform="translate(-9 -11)"
                      fill="#000000"
                      fillRule="nonzero"
                    >
                      <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="ml-3 text-sm leading-6">
                <label
                  htmlFor="checkbox-2"
                  className="text-sm font-medium text-white"
                >
                  Remember me
                </label>
              </div>
            </div>
            <button className="w-full bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
              Log in
            </button>
            <div className="mx-auto my-3 flex w-full max-w-md items-center justify-center gap-4 text-white">
              <hr className="w-full border-[0.1px] border-white" />
              <p className="text-sm">OR</p>
              <hr className="w-full border-[0.1px] border-white" />
            </div>
            <button className="inline-flex w-full items-center justify-center gap-3 border-[1px] border-white bg-black p-3 text-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>{" "}
              Login with Google
            </button>
            <button className="inline-flex w-full items-center justify-center gap-3 border-[1px] border-white bg-black p-3 text-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#ffffff"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Login with GitHub
            </button>
            <p className="text-sm font-light text-white">
              Don&apos;t have an account?{" "}
              <span className="cursor-pointer font-bold hover:underline">
                Create an account
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
