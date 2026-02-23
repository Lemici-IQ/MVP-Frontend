import React from "react";

const Public = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Lemici</h1>
        <p className="text-xl text-gray-600 mb-8">
          Please sign in to access your documents
        </p>
        <div className="text-gray-500">
          Redirecting to login...
        </div>
      </div>
    </div>
  );
};

export default Public;
