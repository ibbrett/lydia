import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <p>dashboard NavBar</p>
      {children}
    </div>
  );
};

export default Layout;
