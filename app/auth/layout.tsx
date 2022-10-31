import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      some background I dont know
      <div className="">
        <div>the content</div>
        <div>{children}</div>
      </div>
    </div>
  );
}
