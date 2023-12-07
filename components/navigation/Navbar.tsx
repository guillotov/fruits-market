import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
    const router = useRouter();
    const closeSession=()=>{
       router.push("/")
    }
  return (
    <>
      <nav className="bg-white dark:bg-principal-10 fixed w-full z-20 top-0 start-0 border-b">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-start space-x-3 rtl:space-x-reverse">
            <div className="flex md:order-3 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                onClick={()=>{closeSession()}}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
