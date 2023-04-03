import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

function App() {

  // darkMode: is a Boolean value that indicates theme mode false for light mode and true for dark mode

  // changeDarkMode: is a function that is called when the user changes the theme mode
  const { darkMode } = useContext(DarkModeContext);
  console.log(darkMode);
  const { currentUser } = useContext(AuthContext);

  const ProtectedUser = ({ children }) => {
    if (!currentUser) {
      return <Navigate to={"/login"} />;
    }
    return children;
  };

  const Layout = () => {
    return (
      <div>
        <NavBar />
        <div className="flex relative">
          <LeftBar />
          <Outlet />
          <RightBar />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedUser>
          <Layout />
        </ProtectedUser>
      ),
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    }, {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div className="h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
