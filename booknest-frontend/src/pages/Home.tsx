import React from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContante";
import Footer from "../components/Footer";
import banner from "../assets/images/logo.png";
import { Clock, Command, Star, ArrowRight } from "react-feather";
import Button from "../components/common/button";
const HomePage = () => {
  return (
    <div>
      <Header />
      <MainContent fullWidth={true}>
        <div
          style={{
            backgroundImage: `url(${banner})`,
            height: "550px", // Set the desired height
            backgroundSize: "cover", // Ensure the image covers the full div
            backgroundPosition: "center", // Center the background image
            position: "relative", // Important for positioning the text
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "45%", // Center vertically
              left: "26%", // Center horizontally
              transform: "translate(-50%, -50%)", // Adjust position to truly center
              color: "#fff", // Text color, change as needed
              textAlign: "center", // Center text alignment
            }}
            className="flex flex-col space-y-8"
          >
            <div className="font-mono">
              <div className="text-6xl text-left">Find</div>
              <div className="text-6xl text-left">Happiness Through</div>
              <div className="text-6xl text-left">Curiosity</div>
            </div>
            <div className="text-left">
              <Button>See More</Button>
            </div>
          </div>
        </div>
        {/* Arrival Sections Starts */}
        <div className="border-indigo-500/100 border-2 md:container md:mx-auto">
          <div className="flex justify-center space-x-12 py-20">
            <img
              className="h-96 w-80"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcO26kdi60I4raBpJSMFyJMX2AzPfb2D9Aw&s"
              alt="New Arrivals 1"
            />
            <img
              className="h-96 w-80"
              src="https://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg"
              alt="New Arrivals 2"
            />
            <div>
              {/* <div className="">NEW ARRIVALS</div> */}
              <h1 className="text-6xl font-bold tracking-widest py-2">
                A r r i v a l
              </h1>
              <div className="flex flox-row space-x-4 py-5">
                <div className="flex space-x-1">
                  <Clock /> <h1 className="text-xl"> 150 mins</h1>
                </div>
                <div className="flex space-x-1">
                  <Command />
                  <h1 className="text-xl">Action</h1>
                </div>
                <div className="flex space-x-1">
                  <Star />
                  <button>Wish List</button>
                </div>
              </div>
              <div className="flex flox-row space-x-8 py-3">
                <p className="text-ellipsis w-80">
                  The power to be found between the pages of a book is
                  formidable, indeed.
                </p>
              </div>
              <div className="py-4 flex space-x-4">
                <div className="py-4 flex">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyk4FpIm61QvXYX86YnTFPCT-U1XIkOnMzGw&s"
                    alt=""
                    className="h-6"
                  />
                  Rating
                </div>
                <div className="py-4 flex ">
                  <img
                    src="https://static.thenounproject.com/png/4973655-200.png"
                    className="h-8"
                  />
                  25 Million Views
                </div>
              </div>
              <div className="py-4">
                <Button>
                  <div>Read Now</div>
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Latest Book Seciton Starts here  */}
        <div className="border-indigo-500/100 border-2 bg-regal-red">
          <div className="w-full flex justify-center py-10">
            <ul className="flex space-x-8 border-b-2 border-transparent py-2 border-b-4 border-white">
              <li>
                <a
                  href="#"
                  className="text-yellow-600 text-lg font-semibold border-b-4 border-yellow-500"
                >
                  Fiction
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-yellow-600 text-lg font-semibold hover:border-b-2 hover:border-yellow-500"
                >
                  Nerrative
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-yellow-600 text-lg font-semibold hover:border-b-2 hover:border-yellow-500"
                >
                  Novel
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-yellow-600 text-lg font-semibold hover:border-b-2 hover:border-yellow-500"
                >
                  Non-Fiction
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-yellow-600 text-lg font-semibold hover:border-b-2 hover:border-yellow-500"
                >
                  Mystery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-yellow-600 text-lg font-semibold hover:border-b-2 hover:border-yellow-500"
                >
                  Science-Fiction
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-yellow-600 text-lg font-semibold hover:border-b-2 hover:border-yellow-500"
                >
                  Fantasy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-yellow-600 text-lg font-semibold hover:border-b-2 hover:border-yellow-500"
                >
                  Horror
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center px-60 space-y-10 py-20">
            <div className="flex justify-between">
              <div className="text-white text-bold text-3xl">
              Art of Fiction
              </div>
              <div className="text-yellow-600">
                See More  
              </div>  
            </div>
            <div className="text-white space-y-4">
              <img
                className="h-80 w-64"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcO26kdi60I4raBpJSMFyJMX2AzPfb2D9Aw&s"
                alt="New Arrivals 1"
              />
              <div className="w-64 text-center text-white text-3xl text-bold">
                Book Name
                <div className="w-64 text-center text-white text-xl text-bold">
                  Support Text
                </div>
                <div className="w-64 mt-2 text-centre"> 
                {/* // Need to fix this issue start lighed left . It should in the centre */}
                  <img
                    src="https://w7.pngwing.com/pngs/589/360/png-transparent-star-customer-service-review-rating-star-text-logo-computer-wallpaper.png"
                    alt=""
                    className="h-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainContent>
      ̦̦̦̦̦̦̦̦̦̦̦̦̦̦̦̦̦̦̦̦̦̦
      <Footer />
    </div>
  );
};

export default HomePage;
