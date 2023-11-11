import { ThemeProvider } from "@emotion/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "../components/layout/navbar/Navbar";
import { NotFound } from "../components/pages/notFound/Page";
import { customTheme } from "../../themeConfig";
import { routes } from "./menuRoutes";
const AppRouter = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Routes>
        <Route element={<NavBar />}>
          {routes.map(({ id, path, Element }) => {
            return <Route key={id} path={path} element={<Element />} />;
          })}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
};

export default AppRouter;
