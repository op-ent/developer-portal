import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div>ACCESSES LIST</div>
      <div>{children}</div>
    </div>
  );
}
