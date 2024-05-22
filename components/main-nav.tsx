"use client"

import * as React from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react"
import Logo from "./logo"
import { Button } from "./button";

const DropdownItem = ({ item }: any) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleItemClick = (event: { preventDefault: () => void; }) => {
    if (item.items && item.items.length) {
      event.preventDefault();  // Prevent link navigation
      setIsHovering(!isHovering);  // Toggle visibility of submenu
    }
  };

  return (
    <div
      className="relative"
    >
      <Link href={item.href}
        onClick={handleItemClick}
        className="flex w-full items-center p-2 hover:bg-gray-700 rounded-md">
        {item.label}
      </Link>
    </div >
  );
};


const navItems = [
  {
    href: '#hero-section', label: 'Products',
  },
  { href: '#benefit', label: 'Benefit' },
  { href: '#how-it-works', label: 'How it Works' },
  { href: '#testimonial', label: 'Testimonial' },
  { href: '#pricing', label: 'Pricing' },
  {
    href: '#download', label: 'Download'
  }
];

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header onClick={closeMenu}
      className="sticky top-0 z-40 w-full border-b border-gray-700 bg-background p-4 text-white transaction-all ease-in">
      <div className="container flex h-16 items-center justify-between p-3 mx-auto">
        <Logo />
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(!isMenuOpen);
          }}        >
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <nav className="hidden lg:flex justify-between items-center space-x-4">
          {navItems.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="flex w-full items-center whitespace-nowrap p-2 hover:bg-gray-700 rounded-md">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center space-x-4">
          <Button
            variant="secondary"
            size="nav"
            label="Login"
          />
          <Button
            href="/"
            variant="primary"
            size="nav"
            label="Get Demo"
          />

        </div>
        {isMenuOpen && (
          <nav className="transaction-all ease-in absolute top-full bg-background-opacity backdrop-blur-lg w-full h-screen shadow-md left-0 right-0 lg:hidden">
            <div className=" w-full  flex-col items-start px-5 py-3 flex bg-background ">
              {navItems?.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className="flex w-full items-center p-2 hover:bg-gray-700 rounded-md">
                  {item.label}
                </Link>
              ))}
              <div className="flex w-full flex-col items-center justify-center gap-4 mt-4">
                <Button
                  variant="primary"
                  size="nav"
                  label="Get Demo"
                />
                <Button
                  variant="secondary"
                  size="nav"
                  label="Login"
                />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header >
  )
}

