import { Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./components/theme/theme-provider";
import { lazy, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import { useFirebaseServices } from "./store/useFirebase";

//Auth Routes
import AuthPageContainer from "./auth/AuthPageContainer";
const WelcomePage = lazy(() => import("./pages/Client/WelcomePage"));
const LoginForm = lazy(() => import("./auth/LoginForm"));

//Home Routes
import Home from "./pages/Client/Home";
const DefaultHome = lazy(() => import("./pages/Client/DefaultHome"));
const ReportPage = lazy(() => import("./pages/Client/ReportPage"));
const ReportSuccess = lazy(() => import("./pages/Client/ReportSuccess"));
const ReportProgress = lazy(() => import("./pages/Client/ReportProgress"));
const UserAccountSettings = lazy(
  () => import("./pages/Client/UserAccountSettings")
);

//Admin Routes
import AdminPanel from "./pages/Admin/AdminPanel";
import LoadingSkeleton from "./components/LoadingSkeleton";
const AdminHome = lazy(() => import("./pages/Admin/AdminHome"));
const Reports = lazy(() => import("./pages/Admin/Reports"));
const ManageUsers = lazy(() => import("./pages/Admin/ManageUsers"));

const App = () => {
  const { getCurrentUser } = useFirebaseServices();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, () => {
      getCurrentUser().then(() => setIsLoading(false));
    });
  }, []);
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className=" font-roboto">
        <div className="h-screen fixed w-full flex items-end -z-10">
          <div className=" bg-gradient-to-t from-red-100 dark:from-transparent h-1/3 w-full"></div>
        </div>

        {isLoading ? (
          <LoadingSkeleton />
        ) : (
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
              <Route path="/admin/" element={<AdminHome />} />
              <Route path="/admin/reports" element={<Reports />} />
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
