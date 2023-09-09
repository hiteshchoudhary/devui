import React from "react";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <header className="fixed top-0 z-10 mx-auto w-full max-w-full bg-[#121212] p-6 text-white lg:px-10">
        <h1>DevUI</h1>
      </header>
      <div className="mx-auto flex w-full items-stretch justify-between gap-10">
        <div className="mt-20 flex w-full flex-col items-start justify-start p-6 md:w-1/2 lg:px-10">
          <div className="w-full">
            <h1 className="mb-2 text-5xl font-extrabold text-white">
              Forgot password?
            </h1>
            <p className="text-xs text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              eius, aliquid autem numquam iure sint perspiciatis voluptatum
              soluta fugiat.
            </p>
          </div>
          <div className="my-14 flex w-full flex-col items-start justify-start gap-4">
            <div className="flex w-full flex-col items-start justify-start gap-2">
              <label className="text-xs text-slate-200">Email</label>
              <input
                placeholder="Enter an email..."
                autoComplete="false"
                type="email"
                className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
              />
            </div>

            <button className="w-full bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
              Start recovery
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

export default ForgotPassword;
