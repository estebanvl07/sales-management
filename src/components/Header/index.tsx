import Link from "next/link";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <header className="border bg-white shadow-sm dark:border-b dark:border-white/10">
      <div className="before:[''] mx-auto flex w-full max-w-[80rem] items-center justify-between gap-6 px-4 py-3 md:before:flex-grow md:before:basis-0 xl:px-0">
        <nav className="hidden w-fit items-center gap-x-2 text-primary md:flex">
          <Link
            href={"/"}
            className="rounded-full bg-primary px-6 py-2 text-white"
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
        <div className="flex md:flex-grow md:basis-0 md:justify-end">
          <p className="w-fit">Pamela Rojas Gonzales</p>
        </div>
        <button className="block md:hidden">
          <MenuIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
