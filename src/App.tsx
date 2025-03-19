import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { EventProvider } from "./contexts/EventContext";
import { AuthProvider } from "./store/AuthProvider";
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import ChatInterface from "./pages/ChatInterface";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import CreateEvent from "./pages/CreateEvent";
import Transportation from "./pages/Transportation";
import ARView from "./pages/ARView";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./store/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider>
        <AuthProvider>
          <EventProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
                <Route 
                  path="/dashboard" 
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/chat" 
                  element={
                    <ProtectedRoute>
                      <ChatInterface />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/events" 
                  element={
                    <ProtectedRoute>
                      <Events />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/events/:id" 
                  element={
                    <ProtectedRoute>
                      <EventDetails />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/events/:id/edit" 
                  element={
                    <ProtectedRoute>
                      <EventDetails />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/events/create" 
                  element={
                    <ProtectedRoute>
                      <CreateEvent />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/transportation" 
                  element={
                    <ProtectedRoute>
                      <Transportation />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/ar" 
                  element={
                    <ProtectedRoute>
                      <ARView />
                    </ProtectedRoute>
                  } 
                />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </EventProvider>
        </AuthProvider>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;