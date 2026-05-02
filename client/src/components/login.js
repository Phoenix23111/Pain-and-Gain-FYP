import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  let Navigate = useNavigate();

  const [Visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token
      localStorage.setItem("auth-token", json.authtoken);

      // console.log("this is atoken="+localStorage.getItem("auth-token"))

      // // Fetch user data
      // const userResponse = await fetch("http://localhost:3001/api/auth/getUser", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "auth-token": localStorage.getItem("auth-token") // Include the auth token in the headers
      //   },
      // });

      // const userData = await userResponse.json();
      // console.log(userData);

      // Redirect to home page
      Navigate("/Homepage"); // Assuming "/" is the path for the home page
    } else {
      alert("INVALID Credentials");
    }
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div
      className="flex  min-h-screen justify-center py-20 sm:px-6 lg:px-20 "
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="flex flex-col backdrop-blur-lg mt-10 bg-white/30 justify-center w-2/6 px-6 py-8 rounded-3xl">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className=" text-center text-3xl font-extrabold text-red-800">
            Login
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-10 px-4 shadow-xl sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit} className=" space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-sm text-gray-700"
                >
                  Email Address:
                </label>

                <div className="mt-1 ">
                  <input
                    className=" appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-ring-blue-500 sm:text-sm "
                    id="email"
                    name="email"
                    value={credentials.email}
                    onChange={onChange}
                    type="email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block font-medium text-sm text-gray-700"
                >
                  Password:
                </label>
                <div className="mt-1 relative">
                  <input
                    className=" appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-ring-blue-500 sm:text-sm "
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={onChange}
                    type={Visible ? "text" : "password"}
                  />
                  {Visible ? (
                    <AiOutlineEye
                      className="absolute right-2 top-2 cursor-pointer"
                      size={25}
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="absolute right-2 top-2 cursor-pointer"
                      size={25}
                      onClick={() => setVisible(true)}
                    />
                  )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full h-[40px] flex justify-center py-2  px-4 border  border-transparent text-sm  font-medium rounded-md text-white bg-red-800 hover:bg-red-600"
                >
                  Log In
                </button>
              </div>
              <div className="flex w-full">
                <h4>Do not have an Account?</h4>
                <Link to="/SignUp" className="text-red-800 pl-2">
                  {" "}
                  Sign-in{" "}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
