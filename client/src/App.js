import { React, Suspense } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Login from "./components/login";
import About from "./components/About";
import GetUserState from "./context/authentication/GetUserState";
import Homepage from "./components/Users/Homepage";
import Loader from "./components/loader";

function App() {
  return (
    <>
      <GetUserState>
        <Router>
          <Suspense fallback={<Loader />}>
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Login/*" element={<Login />} />
              <Route path="SignUp/*" element={<SignUp />} />
              <Route path="About/*" element={<About />} />
              <Route path="Homepage/*" element={<Homepage />} />
            </Routes>
          </Suspense>
        </Router>
      </GetUserState>
    </>
  );
}

export default App;
