import { ReactNode } from "react";

export const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen h-full min-w-screen flex flex-col items-center justify-center">
      {children}
    </div>
  );
};
