/**---------------------------------------------------------------------------------------
 * Copyright (c) 2025. All rights reserved.
 * This project is licensed under the Apache License.
 * See LICENSE file in the project root for license information.
 *-----------------------------------------------------------------------------------------*/

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Toaster } from '@/components/ui/sonner';

const appRoutes = createBrowserRouter([]);

export default function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <RouterProvider router={appRoutes} />
      <Toaster position="top-center" />
    </QueryClientProvider>
  );
}
