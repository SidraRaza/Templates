import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-lg fixed w-full top-0 left-0 z-50">
      <nav className="flex justify-between items-center p-5 relative">
        <div className="text-white text-3xl font-bold flex items-center">
          <img src="/logo.png.webp" alt="logo" />
        </div>
        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <label
          htmlFor="menu-toggle"
          className="text-red-500 text-3xl cursor-pointer md:hidden absolute right-6 top-6"
        >
          &#9776;
        </label>
        <ul className="flex-col list-none md:flex md:flex-row md:static absolute right-0 top-[70px] bg-white md:bg-transparent w-32 p-1 md:w-auto md:p-0 hidden peer-checked:flex z-10 rounded-md shadow-lg md:shadow-none">
          <li className="md:ml-6">
            <Link href="/" className="text-black block py-3 px-2 hover:text-red-500 rounded transition-all">
              Home
            </Link>
          </li>
          <li className="md:ml-6 mt-2 md:mt-0">
            <Link href="/about" className="text-black block py-3 px-2 hover:text-red-500 rounded transition-all">
              About
            </Link>
          </li>
          <li className="md:ml-6 mt-2 md:mt-0">
            <Link href="/services" className="text-black block py-3 px-2 hover:text-red-500 rounded transition-all">
              Services
            </Link>
          </li>
          <li className="md:ml-6 mt-2 md:mt-0">
            <Link href="/" className="text-black block py-3 px-2 hover:text-red-500 rounded transition-all">
              Portfolio
            </Link>
          </li>
        
          <li className="md:ml-6 mt-2 md:mt-0">
            <Link href="/Contact" className="text-black mr-8 block py-3 px-4 hover:text-red-500 rounded transition-all">
              Contact
            </Link>
          </li>
          <li className="md:ml-6 mt-2 md:mt-0">
            <Link href="/Contact" className="text-black  px-10 mr-6 py-3 hover:bg-red-500 bg-red-400 hover:shadow-md rounded transition-all sm:block hidden">
              Get Free Consultant
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
