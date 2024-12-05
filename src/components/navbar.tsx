// 文件: components/Navbar.tsx
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-600 text-white p-4">
      <div className="container mx-auto flex justify-evenly  items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">Github的個人頁面</Link>
        </div>

        {/* Menu Items */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
