import React from "react";
import { useState } from "react";

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Menubar from "./components/Menubar";

const App = () => {
  const { currentUser } = useContext(AuthContext);

  const [menuClick, setMenuClick] = useState(false);

  const handleClickMenu = () => {
    setMenuClick(!menuClick);
  };

  const Layout = () => {
    return (
      <div>
        <Navbar onMenu={handleClickMenu} />
        {menuClick ? (
          <div className=" col-span-12">
            <Menubar />
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (currentUser) {
      return children;
    } else {
      return <Navigate to="/login" />;
    }
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: (
            <div className="grid grid-cols-12">
              <div className=" col-span-2 md:hidden">
                <Menubar />
              </div>

              <div className=" hidden md:block md:col-span-3 lg:col-span-2">
                <Leftbar />
              </div>
              <div className=" col-span-10  md:col-span-9 lg:col-span-7">
                <Home />
              </div>
              <div className=" hidden lg:block lg:col-span-3">
                {" "}
                <Rightbar />
              </div>
            </div>
          ),
        },
        {
          path: "/profile/:id",
          element: (
            <div>
              <Profile />
            </div>
          ),
        },
      ],
    },

    {
      path: "/login",
      element: (
        <div>
          <Login />
        </div>
      ),
    },
    {
      path: "/register",
      element: (
        <div>
          <Register />
        </div>
      ),
    },
  ]);

  return (
    <div>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
};

export default App;
