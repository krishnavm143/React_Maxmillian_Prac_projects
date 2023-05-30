import React from "react";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An Error eccoured";
  let message = "Something went wrong";
  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not Found";
    message = `Could not found the resources`;
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
