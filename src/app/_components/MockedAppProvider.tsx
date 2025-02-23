"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import {} from "../loading";
import { Loading } from "./Loading";

type Props = {
  children: React.ReactNode;
};

export const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ turns retries off
      retry: false,
    },
  },
});

export const MockedAppProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={mockedQueryClient}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </QueryClientProvider>
  );
};
