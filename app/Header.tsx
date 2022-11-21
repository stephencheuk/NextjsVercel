import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="p-5 bg-blue-500 ">
      <p className="font-bold text-white">I am Header</p>
      <Link
        href="/"
        className="m-2 px-2 py-1 bg-white text-blue-500 rounded-lg"
      >
        Home
      </Link>
      <Link
        href="/todos"
        className="m-2 px-2 py-1 bg-white text-blue-500 rounded-lg"
      >
        Todos
      </Link>
      <Link
        href="/search"
        className="m-2 px-2 py-1 bg-white text-blue-500 rounded-lg"
      >
        Search
      </Link>
      <Link
        href="/developer"
        className="m-2 px-2 py-1 bg-white text-blue-500 rounded-lg"
      >
        Developer
      </Link>
      <Link
        href="/dashboard"
        className="m-2 px-2 py-1 bg-white text-blue-500 rounded-lg"
      >
        Dashboard
      </Link>
    </header>
  );
}

export default Header;
