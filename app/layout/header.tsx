import Link from "next/link";
import Image from 'next/image';
import '../assets/styles/header.css';



export default function Header() {
    return (
        <header className="flex items-center p-5 pb-3 color" style={{ paddingLeft: '120px', paddingRight: '120px' }}>
        <div className="flex items-center">
          <Image src="/image.png" alt="SINC PARTNERS Logo" width={114.94} height={64} />
        </div>
        <nav className="space-x-4 flex items-center">
          <Link href="/" legacyBehavior>
            <a className="mx-2 nav-link">About</a>
          </Link>
          <Link href="/" legacyBehavior>
            <a className="mx-2 nav-link">SIP</a>
          </Link>
          <Link href="/" legacyBehavior>
            <a className="mx-2 nav-link">Studio</a>
          </Link>
          <Link href="/" legacyBehavior>
            <a className="mx-2 nav-link">SEEQ</a>
          </Link>
          <Link href="/" legacyBehavior>
            <a className="mx-2 nav-link">Platforms</a>
          </Link>
          <Link href="/" legacyBehavior>
            <a className="mx-2 nav-link">Initiatives</a>
          </Link>
          <div className="relative group">
          <Link href="/" legacyBehavior>
            <a className="nav-link">More</a>
          </Link>
          <div className="absolute hidden group-hover:block bg-white shadow-lg mt-5 rounded-sm w-48">
            <Link href="/" legacyBehavior>
              <a className="block px-4 py-2">Services</a>
            </Link>
            <Link href="/" legacyBehavior>
              <a className="block px-4 py-2">Equity Jobs</a>
            </Link>
            <Link href="/" legacyBehavior>
              <a className="block px-4 py-2">EIR Program</a>
            </Link>
            <Link href="/" legacyBehavior>
              <a className="block px-4 py-2">Offers</a>
            </Link>
            <Link href="/" legacyBehavior>
              <a className="block px-4 py-2">Innovation News</a>
            </Link>
            <Link href="/" legacyBehavior>
              <a className="block px-4 py-2">FAQ</a>
            </Link>
            <Link href="/" legacyBehavior>
              <a className="block px-4 py-2">Blog & Resources</a>
            </Link>
            <Link href="/" legacyBehavior>
              <a className="block px-4 py-2">Press</a>
            </Link>
          </div>
        </div>
        </nav>
         <div className="absolute right-28">
         <button className="ml-2 px-7 py-3 rounded-full  text-white btn-primary hover:bg-cyan-700">
            SINC With Us
          </button>
          <button className="ml-2 px-7 py-3 rounded-full btn-secondary text-white hover:bg-gray-900">
            Apply to SIP 1.0
          </button>
         </div>
      </header>
    );
  }
  