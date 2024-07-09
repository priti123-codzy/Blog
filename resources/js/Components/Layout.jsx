// js/Components/Layout.jsx

import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <nav className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto">
          <h1 className="text-xl font-semibold">SysQube Blog Admin Panel</h1>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
