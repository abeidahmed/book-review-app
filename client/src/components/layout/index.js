import React from "react";

export const AdminLayout = ({ children, ...props }) => (
  <main style={{ minHeight: "calc(100vh - 64px)" }} className="bg-gray-100 p-6 relative" {...props}>
    {children}
  </main>
);
