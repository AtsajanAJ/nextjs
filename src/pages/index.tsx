import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "./components/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center space-x-3 rtl:space-x-reverse">
          <a href="https://github.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="" className="h-8" alt="" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Something</span>
          </a>
          <button data-collapse-toggle='navbar-default' type='button' className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Click me pls</span>
            <svg className="w-5 h-5" aria-hidden='true' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
      </nav>
      { <Button/> }
    </div>
  );
}
