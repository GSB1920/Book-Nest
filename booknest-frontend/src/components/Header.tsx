import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react"; // For the dropdown
import { Fragment } from "react";
import { User } from "react-feather";

const Header: React.FC = () => {
  const isLoggedIn = true; // Hardcoded value for now to check if the user is logged in
  const userName = "John Doe"; // Example username

  return (
    <header className="bg-white border-b border-gray-200 py-4 px-48">
      <div className="flex justify-between items-center">
        {/* Logo and Website Name */}
        <div className="flex items-center">
          <img
            src="https://png.pngtree.com/element_our/20190602/ourmid/pngtree-an-open-yellow-book-image_1414699.jpg"
            className="mr-3 h-8 sm:h-10"
            alt="BookNest Logo"
          />
          <span className="text-2xl font-bold text-gray-800">BookNest</span>
        </div>

        {/* Profile Information or Sign in/Get started */}
        <div className="flex items-center">
          {isLoggedIn ? (
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                  {userName}
                  <svg
                    className="ml-2 -mr-1 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          } block px-4 py-2 text-sm`}
                        >
                          Profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          } block px-4 py-2 text-sm`}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          } block px-4 py-2 text-sm`}
                        >
                          Log out
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <>
              <a
                href="#"
                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </a>
              <a
                href="#"
                className="text-black bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                Get started
              </a>
            </>
          )}
        </div>
      </div>

      {/* Quick Links and Search Bar */}
      <div className="flex justify-between items-center mt-4">
        {/* Quick Links */}
        <div className="flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-primary-700">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-primary-700">
            Company
          </a>
          <a href="#" className="text-gray-700 hover:text-primary-700">
            Marketplace
          </a>
          <a href="#" className="text-gray-700 hover:text-primary-700">
            Features
          </a>
          <a href="#" className="text-gray-700 hover:text-primary-700">
            Team
          </a>
          <a href="#" className="text-gray-700 hover:text-primary-700">
            Contact
          </a>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search for books..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
