import React from "react";
import Form from "./components/form";
import Header from "./components/header";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <Header />
        <div className="mt-8 p-10 bg-white rounded-md shadow">
          <Form />
        </div>
      </div>
    </div>
  );
}
