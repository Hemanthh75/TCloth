import React, { useState } from "react";
import '../Home/Home.css';
import BrandLogo from '../../assets/Logo.png';
import '@emotion/styled';
import '@mui/icons-material';
import { Search } from "@mui/icons-material";
import { WhatsApp } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material";
import { PermIdentity } from "@mui/icons-material";
import Carousel1 from '../../assets/Carousels/Caro1.png';
import MidSecImg from '../../assets/ContentImages/MidSection.png';
import Carousel from "../WomenCollectionsCarousel/Carousel";
import ShopNow from "../ShopNowButton/ShopNow";

function Home() {

    const[isMobileIconOpen, setIsMobileIconOpen] = useState(false);

    function handleIconBar(e){
        setIsMobileIconOpen(!isMobileIconOpen);
    }
    console.log(isMobileIconOpen)
  
  return(
    <div className="container-fluid">

      {/*Logo and top section*/}
        <div className="container-fluid" id="topSection">
            <div className="logo">
                <img src={BrandLogo} alt="BrandLogo" />
            </div>


            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"  onClick={() => handleIconBar()}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item icon">
                            <a className="nav-link active" aria-current="page" href="#"><Search /></a>
                        </li>
                        <li className="nav-item icon">
                            <a className="nav-link active" aria-current="page" href="https://wa.me/919028875810"><WhatsApp /></a>
                        </li>
                        <li className="nav-item icon">
                            <a className="nav-link active" aria-current="page" href="#"><Favorite /></a>
                        </li>
                        <li className="nav-item icon">
                            <a className="nav-link active" aria-current="page" href="#"><PermIdentity /></a>
                        </li>
                    </ul>
                </div>


                </div>
            </nav>
 
        </div>




                                               {/*Logo an top section for mobiles*/}
       {isMobileIconOpen && <div className="icons-mobile">
                <ul style={{listStyleType: "none"}}>
                    <li className="iconItem"><Search /> Search</li>
                    <hr />
                    <li className="iconItem"><a href="https://wa.me/919028875810" style={{textDecoration:"none", color: "black"}}><WhatsApp /> WhatsApp</a></li>
                    <hr />
                    <li className="iconItem"><Favorite /> Favorite</li>
                    <hr />
                    <li className="iconItem"><PermIdentity /> Profile</li>
                    <hr />
                </ul>
        </div>} 


         {/*Navbar and carousol section*/}

         <div className="container">
            <div className="navBar">
            <nav className="navbar-expand-lg navBarrr">
                <div className="container-fluid">
                    
                    <div className="navBarUlList"> 
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 " id="navBarList" style={{cursor: "pointer"}}>
                            <li className="nav-item">
                            <a className="nav-link navBarItem" aria-current="page" href="#WomenSectionCaro">WOMEN</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link navBarItem" aria-current="page" href="#MenSectionCaro">MEN</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link navBarItem" aria-current="page" href="#MapSection">KIDS</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link navBarItem" aria-current="page" href="#MapSection">CAREER</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link navBarItem" aria-current="page" href="#MapSection">SALE</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link navBarItem" aria-current="page" href="#MapSection">ABOUT</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link navBarItem" aria-current="page" href="#MapSection">BLOG</a>
                            </li>
                        </ul>
                    
                    </div>
                </div>
            </nav>
            </div>


            <div className="carouselss">
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={Carousel1} className="d-block w-100 caroImg" alt="..." />
                            </div>
                            <div className="carousel-item">
                            <img src={Carousel1} className="d-block w-100 caroImg" alt="..." />
                            </div>
                            <div className="carousel-item">
                            <img src={Carousel1} className="d-block w-100 caroImg" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                   </div>
            </div>
         </div>
         <br />
         <br />
         <br />
         <br />


         {/*Mid Home Section*/}
         <div className="container-fluid midHomeSection">
            <div style={{color: "#693621"}} className="midSecContent">
                <h1 className="midSecHeading">CONSCIOUS LUXURY<br /> FOR YOU</h1>
                <br />
                <p style={{ fontWeight: "500", opacity: "0.7"}} className="midSecText">
                   At Anita Dongre, we design elegant,<br />
                   effortless pieces that suit every occasion.<br />
                   All our creations are rooted in conscious<br />
                   luxury, and contemporary interpretations of craft.
                </p> <br />     

                <div className="midSecShopNowBtn"><ShopNow /></div>
            </div> <br />




            <div>
                <img src={MidSecImg} alt="" className="midSecImg"/>
            </div>
         </div>




         {/* Women Collections Section */}
         <Carousel />

    </div>
  )
}

export default Home;
