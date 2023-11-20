import { Route, Routes, useNavigate } from "react-router-dom";
import AuthPageContainer from "./auth/AuthPageContainer";
import LoginForm from "./auth/LoginForm";
import SignUpForm from "./auth/SignUpForm";
import Home from "./pages/Home";
import { Toaster } from "@/components/ui/toaster";
import WelcomePage from "./pages/WelcomePage";
import DefaultHome from "./pages/DefaultHome";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import ReportPage from "./pages/ReportPage";
import { ThemeProvider } from "./components/theme/theme-provider";
import ReportSuccess from "./pages/ReportSuccess";
import ReportProgress from "./pages/ReportProgress";

const App = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      setIsLoading(true);
      await onAuthStateChanged(auth, (user) => {
        if (user) {
          navigate("/");
        } else {
          navigate("/welcome");
        }
      });
      setIsLoading(false);
    };
    checkUser();
  }, []);
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      {!isLoading ? (
        <div className=" font-roboto">
          <Routes>
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/auth" element={<AuthPageContainer />}>
              <Route path="/auth/login" element={<LoginForm />} />
              <Route path="/auth/signup" element={<SignUpForm />} />
            </Route>
            <Route path="/" element={<Home />}>
              <Route path="/" element={<DefaultHome />} />
              <Route path="/report" element={<ReportPage />} />
              <Route path="/reportsuccess" element={<ReportSuccess />} />
              <Route path="/progress" element={<ReportProgress />} />
            </Route>
          </Routes>
          <Toaster />
        </div>
      ) : (
        ""
      )}
    </ThemeProvider>
  );
};

export default App;
