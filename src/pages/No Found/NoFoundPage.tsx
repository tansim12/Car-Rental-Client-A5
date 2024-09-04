
import { NavLink } from "react-router-dom";

const NoFoundPage = () => {
  return (
    <div>
      <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">
          404
        </h1>
        <div className="bg-secondary px-2 text-sm rounded rotate-12 absolute text-white">
          Page Not Found
        </div>
        <button className="mt-5">
          <a className="relative inline-block text-sm font-medium text-secondary group active:text-secondary focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-secondary group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 py-3 bg-gray-400 border border-current">
              <NavLink to={"/"}>Home</NavLink>
            </span>
          </a>
        </button>
      </main>
    </div>
  );
};

export default NoFoundPage;
