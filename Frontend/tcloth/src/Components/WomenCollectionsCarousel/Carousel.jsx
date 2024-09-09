import React, { useState } from 'react';
import '../WomenCollectionsCarousel/Carousel.css';
import WomenCaro1 from '../../assets/MidSectionImages/WomenCarouselSection/WomenCaro1.png';
import WomenCaro2 from '../../assets/MidSectionImages/WomenCarouselSection/WomenCaro2.png';
import WomenCaro3 from '../../assets/MidSectionImages/WomenCarouselSection/WomenCaro3.png';
import WomenCaro4 from '../../assets/MidSectionImages/WomenCarouselSection/WomenCaro4.png';
import MenWearOne from '../../assets/MidSectionImages/MensWear/MenWearOne.png';
import MenWearTwo from '../../assets/MidSectionImages/MensWear/MenWearTwo.png';
import Slide4Img from '../../assets/MidSectionImages/4thSlide/Image1.png';
import Slide5Img from '../../assets/MidSectionImages/5thSlide/Image1.png';
import Slide6Img from '../../assets/MidSectionImages/6thSlide/Image1.png';
import Slide7Img1 from '../../assets/MidSectionImages/7thSlide/Image1.png';
import Slide7Img2 from '../../assets/MidSectionImages/7thSlide/Image2.png';
import MapImage from '../../assets/MidSectionImages/8thSlide/MapImage.png'
import Footer from '../Footer/Footer';
import ShopNow from "../ShopNowButton/ShopNow";


const Carousel = () => {


  const[menWearImg, setMenWearImg] = useState(true);

  

  function handleMenWear(){
    setMenWearImg(!menWearImg);
    {/*console.log(`The value of handleMenWear is ${menWearImg}`)*/}
  }

  return (
    <div className='container-fluid CollectionMid'>



      {/*1st Slide*/}
        <div className='womenCollectionSection' id='WomenSectionCaro'> 
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
        <div className='JewelerySection' id='MenSectionCaro'>
        {menWearImg ? (<img src={MenWearOne} onClick={handleMenWear} alt='MewnW1' className='JeweImage'></img>) : (<img src={MenWearTwo} onClick={handleMenWear} alt='MenW2' className='JeweImage'/>)}
          {/*{jewImg ? (<img src={jewImage1} onClick={handleJewClick} alt='Jew1' className='JeweImage'/>) : (<img src={jewImage2} onClick={handleJewClick} alt='Jew2' className='JeweImage'/>)}  */}        
          <div className="Slide2ShopNowbtn"><ShopNow /></div>
        </div>

        <div className='JewelerySection'>
        <img src={Slide4Img} alt="Slide4Img" className='JeweImage'/>
          {/*{jewImg ? (<img src={jewImage1} onClick={handleJewClick} alt='Jew1' className='JeweImage'/>) : (<img src={jewImage2} onClick={handleJewClick} alt='Jew2' className='JeweImage'/>)}  */}        
          <div className="Slide2ShopNowbtn"><ShopNow /></div>
        </div>


        {/*3rd Slide*/}
        {/*<div className='MenWearSection'>
         <div className='menWearImageCon'>
           {menWearImg ? (<img src={MenWearOne} onClick={handleMenWear} alt='MewnW1' className='menWearImg'></img>) : (<img src={MenWearTwo} onClick={handleMenWear} alt='MenW2' className='menWearImg'/>)}
          </div> 
        </div>*/}


        
        {/*4th Slide
        <div className='Slide4'>
            <img src={Slide4Img} alt="Slide4Img" className='slide4Image'/>
            <button type="button" className="btn slide4btn"><p className='slide4BtnText'>Shop Now</p></button>  
        </div>*/}

        {/*5th Slide*/}
        <div className="container-fluid Slide5th">
            <div style={{color: "#693621"}} className="Slide5Content">
                <h1 className="Slide5Heading">THE WEDDING<br /> EDIT</h1>
                <br />
                <p style={{ fontWeight: "500", opacity: "0.7"}} className="Slide5Text">
                    Timeless lehengas handcrafted in <br />
                    Pichhwari,Bandhani and Benarasi
                </p> <br />     
            </div> <br />

            <div>
                <img src={Slide5Img} alt="" className="Slide5Img"/>
            </div>
        </div>
        
        <div className="Slide2ShopNowbtn" id='Slide2ShopNowbtn'><ShopNow /></div>

        {/*6th Slide*/}
        <div style={{color: "#693621"}} className='container-fluid Slide6th'>
            <div  className='Slide6Content'>
                <h1 className='Slide6Heading'>Exquisite <br /> Traditional Wear</h1>
                <p className='Slide6Text'>Celebrate the richness of cultural heritage <br />
                   with our finely crafted ethnic attire. <br />
                   Designed for the modern woman who cherishes tradition, our clothing collection <br />                
                   offers a perfect blend of classic elegance and <br />
                   contemporary style</p>
            </div>


            <div >
              <img src={Slide6Img} alt="Slide6Image..." className='Slide6Image'/>
            </div>
        </div>

        {/*7th Slide*/}
        <div className='conatiner-fluid Slide7' style={{color: "#693621"}}>
          <div>
            <img src={Slide7Img1} alt="Slide7Img1" className='slide7Img'/>
            <h1 className='Slide7Heading' id='Slide7Heading1'>Graceful Festive Attire <br /><hr/></h1>
            <p className='Slide7Text' id='Slide7Text1'>A curated collection of occasion and <br />
            everyday styles.</p>
          </div>
          <div>
            <img src={Slide7Img2} alt="Slide7Img2"  className='slide7Img'/>
            <h1 className='Slide7Heading' id='Slide7Heading2'>Classy Ethnic Wear <br /><hr /></h1>
            <p className='Slide7Text' id='Slide7Text2'>Signature wear in  kaleidoscope colors,<br />
            nocturnal blooms and swaying silhouettes. </p>
            </div>
        </div>

        {/*8th Slide*/}
        <div className='mapSection' id='MapSection' style={{color: "#693621"}}>
            <h1 className='mapSecHeading'>Visit us now</h1>
            <img src={MapImage} style={{cursor: "pointer"}} alt="Map Image" className='mapSecImage' onClick={() => window.open('https://maps.app.goo.gl/3vZaiY845nKGLUZ69', '_blank')}/>
        </div>

        <Footer />



    </div>
  )
}

export default Carousel