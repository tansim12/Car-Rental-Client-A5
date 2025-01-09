import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
   <div className="">
     <div className="mb-16 w-full max-w-7xl mx-auto p-2 sm:p-3 md:p-4">
      {children}
    </div>
   </div>
  );
};

export default Container;
