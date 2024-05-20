import { createBrowserRouter as Router } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home.jsx";
import SignIn from "../pages/signup/SignUp.jsx";
import TreasureParent from "../pages/treasure/TreasureParent.jsx";

const router = Router([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignIn />,
      },
      {
        path: "/treasure",
        element: <TreasureParent />,
      },
    ],
  },
]);
export default router;
