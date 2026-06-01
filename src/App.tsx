import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Feed from "./pages/Feed";
import Athletes from "./pages/Athletes";
import Jobs from "./pages/Jobs";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AppLayout from "./components/layout/AppLayout";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<AppLayout />}>
              <Route
                path="/feed"
                element={
                  <ProtectedRoute>
                   <Feed />
                  </ProtectedRoute>
               }
            />
              <Route
                path="/athletes"
                element={
                  <ProtectedRoute>
                   <Athletes />
                  </ProtectedRoute>
               }
            />
              <Route
                path="/jobs"
                element={
                  <ProtectedRoute>
                   <Jobs />
                  </ProtectedRoute>
               }
            />
              <Route
                path="/messages"
                element={
                  <ProtectedRoute>
                   <Messages />
                  </ProtectedRoute>
               }
            />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                   <Profile />
                  </ProtectedRoute>
               }
            />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
