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
            height: '500px', // Set the desired height
            backgroundSize: 'cover', // Ensure the image covers the full div
            backgroundPosition: 'center' // Center the background image
        }}>

        </div>
        HI there
    </MainContent>
    <Footer />
</div>
  )
}

export default HomePage