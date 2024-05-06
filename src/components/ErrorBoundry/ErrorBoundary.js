import React, { useState } from "react";
import ErrorPage from "../../page/ErrorPage";


function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  const handleError = (error, errorInfo) => {
    console.error("Error Boundary:", error, errorInfo);
    setHasError(true);
  };

  React.useEffect(() => {
    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []); // Empty dependency array ensures the effect runs once

  if (hasError) {
    return <ErrorPage />;
  }

  return <>{children}</>;
}

export default ErrorBoundary;
