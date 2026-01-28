import { ReactNode } from "react";
import type { Metadata } from "next";

const now = new Date();

export const metadata: Metadata = {
  title: "NFL Teams - " + now.getTime(),
  description: "NFL Teams | Having fun with Bun!",
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <p>global default NavBar</p>
      {children}
    </div>
  );
};

export default Layout;
