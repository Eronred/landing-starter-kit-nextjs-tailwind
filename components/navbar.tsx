"use client"
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-white shadow">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <span className="text-gray-800 text-xl font-bold hover:text-gray-700 cursor-pointer">Your Logo</span>
                    </Link>

                    <div className="relative">
                        <button
                            type="button"
                            className="text-gray-700 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                            aria-haspopup="true"
                        >
                            Developers <span aria-hidden="true">▾</span>
                        </button>

                        <div
                            className="invisible opacity-0 absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-10 transition-opacity duration-300 group-hover:visible group-hover:opacity-100"
                            onMouseLeave={e => e.currentTarget.classList.add('invisible', 'opacity-0')}
                            onMouseEnter={e => e.currentTarget.classList.remove('invisible', 'opacity-0')}
                            aria-label="submenu"
                        >
                            <Link href="/connect-kit">
                                ConnectKit
                            </Link>
                            <Link href="/api">
                                API
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
