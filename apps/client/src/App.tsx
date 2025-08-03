/**---------------------------------------------------------------------------------------
 * Copyright (c) 2025. All rights reserved.
 * This project is licensed under the Apache License.
 * See LICENSE file in the project root for license information.
 *-----------------------------------------------------------------------------------------*/

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from '@/components/ui/sonner';
import Home from '@/pages/Home';
import Notfound from '@/pages/Notfound';
import LoginForm from '@/pages/Login';
import SignupForm from '@/pages/Signup';
import LandlordDashboard from './pages/LandlordDashboard';

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <LoginForm />
  },
  {
    path: "/signup",
    element: <SignupForm />
  },
  {
    path: "/landlord/dashboard",
    element: <LandlordDashboard />
  },
  {
    path: "*",
    element: <Notfound />
  }
]);

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <QueryClientProvider client={new QueryClient()}>
        <RouterProvider router={appRoutes} />
        <Toaster position="top-center" richColors />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
