const Register = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <header className="fixed top-0 z-10 mx-auto w-full max-w-[85rem] bg-[#121212] p-6 text-white lg:px-10">
        <h1>DevUI</h1>
      </header>
      <div className="mx-auto flex w-full items-stretch justify-between gap-10">
        <div className="mt-20 flex w-full flex-col items-start justify-start p-6 md:w-1/2 lg:px-10">
          <div className="w-full">
            <h1 className="mb-2 text-5xl font-extrabold text-white">
              Register
            </h1>
            <p className="text-xs text-slate-400">
              Before we start, please create your account
            </p>
          </div>
          <div className="my-14 flex w-full flex-col items-start justify-start gap-4">
            <div className="flex w-full flex-col items-start justify-start gap-2">
              <label className="text-xs text-slate-200">First name</label>
              <input
                placeholder="Enter a first name..."
                autoComplete="false"
                className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-2">
              <label className="text-xs text-slate-200">Last name</label>
              <input
                placeholder="Enter a last name..."
                autoComplete="false"
                className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-2">
              <label className="text-xs text-slate-200">Email</label>
              <input
                placeholder="Enter an email..."
                autoComplete="false"
                className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-2">
              <label className="text-xs text-slate-200">Username</label>
              <input
                placeholder="Enter a username..."
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
            <div className="relative mt-4 flex items-center">
              <div className="flex h-6 items-center">
                <input
                  id="notifications"
                  aria-describedby="notifications-description"
                  name="notifications"
                  type="checkbox"
                  className="h-5 w-5 rounded-none border-gray-300 text-[#ae7aff] focus:ring-[#ae7aff]"
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label
                  htmlFor="notifications"
                  className="text-sm font-medium text-white"
                >
                  I agree to receive email updates
                </label>
                <p
                  id="notifications-description"
                  className="text-xs text-slate-500"
                >
                  You will get emails on new features and releases
                </p>
              </div>
            </div>
            <div className="relative mb-4 flex items-center">
              <div className="flex h-6 items-center">
                <input
                  id="notifications"
                  aria-describedby="notifications-description"
                  name="notifications"
                  type="checkbox"
                  className="h-5 w-5 rounded-none border-gray-300 text-[#ae7aff] focus:ring-[#ae7aff]"
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label
                  htmlFor="notifications"
                  className="text-sm font-medium text-white"
                >
                  I agree to the terms and conditions
                </label>
              </div>
            </div>
            <button className="w-full bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e]">
              Create Account
            </button>
            <p className="my-14 text-sm font-light text-white">
              Already registered?{" "}
              <span className="cursor-pointer font-bold hover:underline">
                Sign in to your account
              </span>
            </p>
          </div>
        </div>
        <div className="fixed right-0 z-20 hidden h-screen w-1/2 md:block">
          <img
            className="h-full w-full object-cover"
            src="https://images.pexels.com/photos/1144275/pexels-photo-1144275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="register_image"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
