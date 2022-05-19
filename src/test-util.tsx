import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserDetail, UserProvider } from "./provider/UserProvider";

const AllTheProviders: FC = ({ children }) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      {children}
    </QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

const renderWithUseContextUser = (ui: ReactElement, userDetail: UserDetail) => {
  const Wrapper: FC = ({ children }) => {
    return (
      <UserProvider value={userDetail}>
        <>{children}</>
      </UserProvider>
    );
  };
  return customRender(<Wrapper>{ui}</Wrapper>);
};

// override render method
export { customRender as render, renderWithUseContextUser };
