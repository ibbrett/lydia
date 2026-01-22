import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <p>global default NavBar</p>
      {children}
    </div>
  );
};

export default Layout;
