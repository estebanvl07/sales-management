import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="border bg-white shadow-sm dark:border-b dark:border-white/10">
      <div className="before:[''] container mx-auto flex w-full items-center justify-between py-3 before:flex-grow before:basis-0">
        <nav className="text-primary flex w-fit items-center gap-x-2">
          <Link
            href={"/"}
            className="bg-primary rounded-full px-6 py-2 text-white"
          >
            Dashboard
          </Link>
          <p className="hover:bg-primary-ghost dark:hover:bg-primary-ghost-dark cursor-pointer select-none rounded-full px-6 py-2">
            Clientes
          </p>
          <p className="hover:bg-primary-ghost dark:hover:bg-primary-ghost-dark cursor-pointer select-none rounded-full px-6 py-2">
            Reglas de acomulación
          </p>
        </nav>
        <div className="flex flex-grow basis-0 justify-end">
          <p className="w-fit">Pamela Rojas Gonzales</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
