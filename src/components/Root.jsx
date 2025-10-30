import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import HomePage from "./HomePage";
import FAQSection from "./FAQSection";
import FeaturedSection from "./FeaturedSection";
import BlogSection from "./BlogSection";
import CommonQueries from "./CommonQueries";
import SignUp from "./SignUp";
import Login from "./Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <FAQSection />,
      },
      {
        path: "/room",
        element: <FeaturedSection />,
      },
      {
        path: "/gallery",
        element: <BlogSection />,
      },
      {
        path: "/services",
        element: <CommonQueries />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      }
    ],
  },
]);

export default router;
