import React from "react";

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <p className="text-red-500 text-sm mt-2">{message}</p>
  );
};

export default ErrorMessage;
