import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/ForgotPassword";

const authRoutes = [
  { path: "/signin", Element: Signin },
  { path: "/signup", Element: Signup },
  { path: "/forgot-password", Element: ForgotPassword },
];

export { authRoutes };
