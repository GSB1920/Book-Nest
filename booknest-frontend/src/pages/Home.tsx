import React from "react"
import Header from "../components/Header"
import MainContent from "../components/MainContante"
import Footer from "../components/Footer"
import banner from "../assets/images/logo.png";

const HomePage = ()=>{
  return (
    <div>
    <Header />
    <MainContent fullWidth={true}>
    <div style={{
    backgroundImage: `url(${banner})`,
    height: '550px', // Set the desired height
    backgroundSize: 'cover', // Ensure the image covers the full div
    backgroundPosition: 'center', // Center the background image
    position: 'relative', // Important for positioning the text
}}>
    <div style={{
        position: 'absolute',
        top: '45%', // Center vertically
        left: '26%', // Center horizontally
        transform: 'translate(-50%, -50%)', // Adjust position to truly center
        color: '#fff', // Text color, change as needed
        textAlign: 'center', // Center text alignment
    }}>
        <div className="font-mono" >
        <div className="text-6xl text-left">Enjoy</div>
        <div className="text-6xl text-left">The Movies</div>
        <div className="text-6xl text-left">Shows And</div>
        <div className="text-6xl text-left">Songs</div>
        </div>
        {/* <p className="banner_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className="see_bt"><a href="#">See More</a></div> */}
    </div>
    </div>
    {/* Arrival Sections Starts */}
    <div className="border-indigo-500/100 border-2 md:container md:mx-auto">
        <div className="flex justify-center space-x-12 py-20">
          <img className="h-96 w-80" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcO26kdi60I4raBpJSMFyJMX2AzPfb2D9Aw&s" alt="New Arrivals 1" />
          <img className="h-96 w-80" src="https://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg" alt="New Arrivals 2" />
          <div>
            {/* <div className="">NEW ARRIVALS</div> */}
            <h1 className="text-6xl font-bold tracking-widest py-2">A r r i v a l</h1>
            <div className="flex flox-row space-x-8 py-5">
              <h1 className="text-xl">150 mins</h1> <h1 className="text-xl">Action</h1>
              <button>Watch List</button>
            </div>
            <div className="flex flox-row space-x-8 py-3">
              <p className="text-ellipsis w-80">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, harum? Ut, sed? Sapiente aspernatur consequuntur nulla iure ex ducimus cum vel quisquam voluptatum. Similique cum veritatis quaerat quia cumque nostrum.</p>
            </div>
            
          </div>
        </div>
    </div>
    </MainContent>
    <Footer />
</div>
  )
}

export default HomePage