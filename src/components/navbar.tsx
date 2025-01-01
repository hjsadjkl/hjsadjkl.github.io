// 文件: components/Navbar.tsx
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav
    style={{backgroundColor: "var(--foreground)", color: "var(--background)"}} 
    className="p-4" 
    >
      <div className="container mx-auto flex justify-between  items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">Github的個人頁面</Link>
        </div>

        {/* Menu Items */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/about" className="text-2xl hover:underline">
              關於我
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-2xl hover:underline">
              專案經歷
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
