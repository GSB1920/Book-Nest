import React from "react";
import { ArrowRight } from "react-feather";

const NewsLetter = () => {
  return (
    <div className="w-full layout_padding bg-cover bg-no-repeat bg-newsLetter">
        <div className="container mx-auto">
          <h1 className="text-center text-4xl text-white uppercase">
            Subscribe Our Newsletter
          </h1>
          <div className="box_main w-2/3 mx-auto text-center bg-white bg-opacity-50 p-10">
            <p className="text-left text-lg text-gray-200">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking
            </p>
            <div className="flex items-center pt-5">
              <input
                type="text"
                className="email_text w-full text-lg text-gray-600 bg-white p-2"
                placeholder="Enter Your email"
                name="Enter Your email"
              />
              <div className="right_arrow bg-yellow-600 p-3 ml-2">
                <a href="#">
                  {/* <img src="https://www.free-css.com/free-css-templates" /> */}
                  <ArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default NewsLetter;
