import { Route, Routes, useNavigate } from "react-router-dom";
import AuthPageContainer from "./auth/AuthPageContainer";
import LoginForm from "./auth/LoginForm";
import SignUpForm from "./auth/SignUpForm";
import Home from "./pages/Home";
import { Toaster } from "@/components/ui/toaster";
import WelcomePage from "./pages/WelcomePage";
import DefaultHome from "./pages/DefaultHome";
import ReportPage from "./pages/ReportPage";
import { ThemeProvider } from "./components/theme/theme-provider";
import ReportSuccess from "./pages/ReportSuccess";
import ReportProgress from "./pages/ReportProgress";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className=" font-roboto">
        <Routes>
          <Route path="/auth" element={<AuthPageContainer />}>
            <Route path="/auth/welcome" element={<WelcomePage />} />
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
    </ThemeProvider>
  );
};

export default App;
