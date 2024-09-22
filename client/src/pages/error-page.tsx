import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as
    | Error
    | { statusText?: string; message?: string };

  console.error(error);

  const errorMessage =
    error instanceof Error
      ? error.message
      : (error as { statusText?: string; message?: string }).statusText ||
        (error as { message?: string }).message;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}
