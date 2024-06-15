import { createBrowserRouter as Router } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home.jsx";
import SignUp from "../pages/signup/SignUp.jsx";
import TreasureParent from "../pages/treasure/TreasureParent.jsx";
import LogIn from "../pages/login/LogIn.jsx";
import Portofolio from "../pages/portofolio/Portofolio.jsx";
import OrderDetail from "../pages/OrderDetail/OrderDetail.jsx";

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
        element: <SignUp />,
      },
      {
        path: "/illustration",
        element: <TreasureParent />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/order-page/:NoJasa",
        element: <Portofolio />,
      },
      {
        path: "/order-detail",
        element: <OrderDetail />,
      },
    ],
  },
]);
export default router;
