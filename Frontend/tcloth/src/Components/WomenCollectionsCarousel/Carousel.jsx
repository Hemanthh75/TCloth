import React, { useState } from 'react';
import '../WomenCollectionsCarousel/Carousel.css';
import WomenCaro1 from '../../assets/MidSectionImages/WomenCarouselSection/WomenCaro1.png';
import WomenCaro2 from '../../assets/MidSectionImages/WomenCarouselSection/WomenCaro2.png';
import WomenCaro3 from '../../assets/MidSectionImages/WomenCarouselSection/WomenCaro3.png';
import WomenCaro4 from '../../assets/MidSectionImages/WomenCarouselSection/WomenCaro4.png';
import jewImage1 from '../../assets/MidSectionImages/JeweleryImages/JeweleryOne.png';
import jewImage2 from '../../assets/MidSectionImages/JeweleryImages/JeweleryTwo.png';
import MenWearOne from '../../assets/MidSectionImages/MensWear/MenWearOne.png';
import MenWearTwo from '../../assets/MidSectionImages/MensWear/MenWearTwo.png';
import Slide4Img from '../../assets/MidSectionImages/4thSlide/Image1.png';
import Slide5Img from '../../assets/MidSectionImages/5thSlide/Image1.png';


const Carousel = () => {

  const[jewImg, setJewImg] = useState(true);
  const[menWearImg, setMenWearImg] = useState(true);

  function handleJewClick(){
    setJewImg(!jewImg)
  }

  function handleMenWear(){
    setMenWearImg(!menWearImg);
    {/*console.log(`The value of handleMenWear is ${menWearImg}`)*/}
  }

  return (
    <div className='container-fluid CollectionMid'>



      {/*1st Slide*/}
        <div className='womenCollectionSection'> 
            <h5><a href="" style={{color: "black"}}>Shop By Category</a></h5>
            <span style={{color: "#693621"}}><strong style={{fontSize: "50px"}}>READY</strong>  to wear</span>
            <div className='womMidCollImg'>
                <img src={WomenCaro1} alt="WomenCaro1..." id='WomenCaro1'/>
                <img src={WomenCaro2} alt="WomenCaro2..." id='WomenCaro2'/>
                <img src={WomenCaro3} alt="WomenCaro3..." id='WomenCaro3'/>
                <img src={WomenCaro4} alt="WomenCaro4..." id='WomenCaro4'/>
            </div>
        </div>


        {/*2nd Slide*/}
        <div className='JewelerySection'>
          {jewImg ? (<img src={jewImage1} onClick={handleJewClick} alt='Jew1' className='JeweImage'/>) : (<img src={jewImage2} onClick={handleJewClick} alt='Jew2' className='JeweImage'/>)}
        </div>


        {/*3rd Slide*/}
        <div className='MenWearSection'>
          {menWearImg ? (<img src={MenWearOne} onClick={handleMenWear} alt='MewnW1' className='menWearImg'></img>) : (<img src={MenWearTwo} onClick={handleMenWear} alt='MenW2' className='menWearImg'/>)}
          <button type="button" className="btn menWearButton"><p className='menswearBtnText'>Shop Now</p></button>         
        </div>

        
        {/*4th Slide*/}
        <div className='Slide4'>
            <img src={Slide4Img} alt="Slide4Img" className='slide4Image'/>
            <button type="button" className="btn slide4btn"><p className='slide4BtnText'>Shop Now</p></button>  
        </div>

        {/*4th Slide*/}
        <div className="container-fluid Slide5th">
            <div style={{color: "#693621"}} className="Slide5Content">
                <h1 className="Slide5Heading">THE WEDDING<br /> EDIT</h1>
                <br />
                <p style={{ fontWeight: "500", opacity: "0.7"}} className="Slide5Text">
                    Timeless lehengas handcrafted in <br />
                    Pichhwari,Bandhani and Benarasi
                </p> <br />     

                <button type="button" className="btn btn-lg Slide5ShopNowBtn" style={{backgroundColor: "#693621", color:"white"}}>Shop Now</button>
            </div> <br />

            <div>
                <img src={Slide5Img} alt="" className="Slide5Img"/>
            </div>
         </div>

    </div>
  )
}

export default Carousel