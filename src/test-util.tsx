import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserDetail, UserProvider } from "./provider/UserProvider";
import { MemoryHistory } from "history";
import { Router } from "react-router-dom";

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

const renderWithUseContextUser = (
  ui: ReactElement,
  userDetail: UserDetail = {}
) => {
  const Wrapper: FC = ({ children }) => {
    return (
      <UserProvider value={userDetail}>
        <>{children}</>
      </UserProvider>
    );
  };
  return customRender(<Wrapper>{ui}</Wrapper>);
};
const renderWithUserAndRouter = (
  ui: ReactElement,
  userDetail: UserDetail,
  history: MemoryHistory
) => {
  const Wrapper: FC = ({ children }) => {
    return (
      <Router navigator={history} location={history.location}>
        <UserProvider value={userDetail}>
          <>{children}</>
        </UserProvider>
      </Router>
    );
  };
  return customRender(<Wrapper>{ui}</Wrapper>);
};
// override render method
export {
  customRender as render,
  renderWithUseContextUser,
  renderWithUserAndRouter,
};
