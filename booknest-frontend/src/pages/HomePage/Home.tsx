import React from "react";
import Header from "../../components/Header";
import MainContent from "../../components/MainContante";
import Footer from "../../components/Footer";
import banner from "../../assets/images/logo.png";
import { Clock, Command, Star, ArrowRight } from "react-feather";
import Button from "../../components/common/button";
import LatestBooks from "./latestBooks";
import NewsLetter from "./newsLetter";
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
        <div className="md:container md:mx-auto">
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
        <div className="bg-regal-red">
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
          <LatestBooks />
        </div>
        <NewsLetter />
        <div className="md:container md:mx-auto">
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
            <div className="flex-col items-center justify-center my-auto">
              {/* <div className="">NEW ARRIVALS</div> */}
              <h1 className="w-24 h-24 rounded-full bg-regal-red text-white text-5xl flex items-center justify-center">01</h1>
              <h1 className="text-6xl font-bold tracking-widest py-2">
                C O M I N G <br /> S O O N
              </h1>
              <div className="flex flox-row space-x-8 py-3">
                <p className="text-ellipsis w-80">
                  It is a long established fact that a reader will NOT be
                  distracted by the readable content of a page when looking
                </p>
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
