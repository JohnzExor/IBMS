import { Route, Routes } from "react-router-dom";
import AuthPageContainer from "./auth/AuthPageContainer";
import LoginForm from "./auth/LoginForm";
import Home from "./pages/Client/Home";
import { Toaster } from "@/components/ui/toaster";
import WelcomePage from "./pages/Client/WelcomePage";
import DefaultHome from "./pages/Client/DefaultHome";
import ReportPage from "./pages/Client/ReportPage";
import { ThemeProvider } from "./components/theme/theme-provider";
import ReportSuccess from "./pages/Client/ReportSuccess";
import ReportProgress from "./pages/Client/ReportProgress";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import UserAccountSettings from "./pages/Client/UserAccountSettings";
import Dashboard from "./pages/Admin/Dashboard";
import AdminPanel from "./pages/Admin/AdminPanel";
import AdminHome from "./pages/Admin/AdminHome";
import ManageUsers from "./pages/Admin/ManageUsers";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, () => {
      setIsLoading(false);
    });
  }, []);
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className=" font-roboto">
        <div className="h-screen fixed w-full flex items-end -z-10">
          <div className=" bg-gradient-to-t from-red-100 dark:from-transparent h-1/3 w-full"></div>
        </div>
        {!isLoading && (
          <Routes>
            <Route path="/auth" element={<AuthPageContainer />}>
              <Route path="/auth/welcome" element={<WelcomePage />} />
              <Route path="/auth/login" element={<LoginForm />} />
            </Route>
            <Route path="/" element={<Home />}>
              <Route path="/" element={<DefaultHome />} />
              <Route path="/report" element={<ReportPage />} />
              <Route path="/reportsuccess" element={<ReportSuccess />} />
              <Route path="/progress" element={<ReportProgress />} />
              <Route
                path="/accountsettings"
                element={<UserAccountSettings />}
              />
            </Route>
            <Route path="/admin" element={<AdminPanel />}>
              <Route path="/admin/home" element={<AdminHome />} />
              <Route path="/admin/reports" element={<Dashboard />} />
              <Route path="/admin/manageusers" element={<ManageUsers />} />
            </Route>
          </Routes>
        )}

        <Toaster />
      </div>
    </ThemeProvider>
  );
};

export default App;
