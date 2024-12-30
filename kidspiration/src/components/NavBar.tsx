"use client"
"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 w-full bg-white/40 backdrop-blur-lg border-b border-gray-300/300 z-50 shadow-md">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-4xl font-extrabold text-center text-gradient-rainbow">KidSpiration</h2>
        </div>
        <div className="flex items-center space-x-4 mr-36">
          {pathname !== '/register' && (
            <Link href="/register">
              <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-purple-700 hover:text-green-700">
                Sign Up
              </button>
            </Link>
          )}
          {pathname !== '/login' && (
            <Link href="/login">
              <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-purple-700 hover:text-green-700">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
