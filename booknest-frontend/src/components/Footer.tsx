import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <ul className="flex space-x-8">
            <li>
              <a href="index.html" className="hover:text-yellow-500">
                Home
              </a>
            </li>
            <li>
              <a href="movies.html" className="hover:text-yellow-500">
                Movies
              </a>
            </li>
            <li>
              <a href="tv.html" className="hover:text-yellow-500">
                TV
              </a>
            </li>
            <li>
              <a href="celebs.html" className="hover:text-yellow-500">
                Celebs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Sports
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                News
              </a>
            </li>
          </ul>
        </div>

        <div className="flex justify-center mt-8">
          <ul className="flex space-x-6">
            <li>
              <a href="#">
                <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" className="h-6 w-6" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://img.freepik.com/premium-vector/new-twitter-x-logo-vector-twitter-x-sign-vector_952796-6.jpg?semt=ais_hybrid" className="h-6 w-6" alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" className="h-6 w-6" alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968776.png" className="h-6 w-6" alt="Instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-4 mt-12">
        <div className="container mx-auto">
          <p className="text-center text-sm">
            All Right Reserved @ Copyright 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
