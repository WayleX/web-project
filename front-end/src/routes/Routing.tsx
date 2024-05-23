import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { CalendarPage } from "../pages/CalendarPage";
import { EnterCode } from "../pages/EnterCode";
import { ForgotPassword } from "../pages/ForgotPassword";
import { Login } from "../pages/Login";
import MyPage from "../pages/MyPage";
import { NewPassword } from "../pages/NewPassword";
import Normal from "../pages/NormalLanding";
import { NotFound } from "../pages/NotFound";
import { Registration } from "../pages/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/code",
    element: <EnterCode />,
  },
  {
    path: "/auth",
    element: <Registration />,
  },
  {
    path: "/password",
    element: <ForgotPassword />,
  },
  {
    path: "/new-password",
    element: <NewPassword />,
  },
  {
    path: "/main",
    element: <Normal />,
  },
  {
    path: "/mypage",
    element: <MyPage />,
  },
  {
    path: "/calendar",
    element: <CalendarPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
