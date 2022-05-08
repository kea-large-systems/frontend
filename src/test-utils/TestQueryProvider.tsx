import { QueryClient, QueryClientProvider } from "react-query";

interface TestQueryProviderProps {
  children: JSX.Element;
}

export function TestQueryProvider({ children }: TestQueryProviderProps) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      {children}
    </QueryClientProvider>
  );
}
