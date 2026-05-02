import React, { useContext, useEffect } from "react";
import GetUserContext from "../../context/authentication/GetUserContext";

<<<<<<< HEAD
const Homepage = () => {
  const a = useContext(GetUserContext);
  useEffect(() => {
    a.FetchUserData();
    // eslint-disable-next-line
  }, []);
  console.log("this is pikachu state", a.state);
  return (
    // <div className="pt-16">
    //   <h2>Welcome to the Home Page</h2>
    //   {a.state ? (
    //     <div>
    //       <p>User Name: {a.state.name}</p>
    //       <p>User Email: {a.state.email}</p>
    //       {/* Add more information as needed */}
    //     </div>
    //   ) : (
    //     <p>Loading user data...</p>
    //   )}
    // </div>
    <>
      <div className=""></div>

    </>
=======
import Sidebar from "./Sidebar";
import YouTubeSearch from "./YoutubeSearch";
import CHATBOT from "../chatbot";

const Homepage = () => {
  const userContext = useContext(GetUserContext);

  useEffect(() => {
    userContext.FetchUserData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-">
        <div className="md:col-span-1 ">
          <Sidebar />
        </div>
        <div className="md:col-span-5 p-4">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            {userContext.state ? (
              <div className="mb-6 ">
                <h2 className="text-red-800 text-3xl font-bold mb-4">
                  User Dashboard
                </h2>
                <p>
                  <strong className="text-red-800 font-extrabold text-xl font-sans">
                    WELCOME!
                  </strong>{" "}
                  {userContext.state.name}
                </p>
              </div>
            ) : (
              <p className="text-lg">Loading user data...</p>
            )}
            <YouTubeSearch></YouTubeSearch>
          </div>
        </div>
      </div>
      <CHATBOT></CHATBOT>
    </div>
>>>>>>> 35106c63c0056617c39bbf283250d035ff5907c3
  );
};

export default Homepage;
