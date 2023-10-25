import React, { useContext } from "react";
import Link from "next/link";
import { RxSketchLogo, RxDashboard, RxExit } from "react-icons/rx";
import { BiSolidBook } from "react-icons/bi";

interface SidebarProps {
    children: React.ReactNode;
}

// Create an authentication context
const AuthContext = React.createContext<{ isLoggedIn: boolean } | undefined>(undefined);

const Sidebar: React.FC<SidebarProps> = ({children}) => {
  // Use the context to get the user's authentication status
  const authContext = useContext(AuthContext);
  if (!authContext) {
    // Handle the case where the context is not provided properly
    return null;
  }

  const { isLoggedIn } = authContext;

  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="bg-purple-800 text-white p-3 rounded-2xl inline-block">
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-300 w-full p-2"></span>

          {isLoggedIn ? ( // Conditionally render based on authentication status
            <>
              <Link href="/books">
                <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-2xl inline-block">
                  <BiSolidBook size={20} />
                </div>
              </Link>
              <Link href="/dashboard">
                <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-2xl inline-block">
                  <RxDashboard size={20} />
                </div>
              </Link>
              <Link href="http://127.0.0.1:8000/logout">
                <div className="bg-gray-100 hover-bg-gray-200 cursor-pointer my-4 p-3 rounded-2xl inline-block">
                  <RxExit size={20} />
                </div>
              </Link>
            </>
          ) : (
            <>
              <Link href="/signup">
                <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-2xl inline-block">
                  Sign Up
                </div>
              </Link>
              <Link href="/login">
                <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-2xl inline-block">
                  Login
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
