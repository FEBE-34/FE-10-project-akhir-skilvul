import React from "react";

function Authlayout({ children }) {
  return (
    <div className="auth-multi-layout">
      <div className="auth-box">{children}</div>
    </div>
  );
}

export default Authlayout;
