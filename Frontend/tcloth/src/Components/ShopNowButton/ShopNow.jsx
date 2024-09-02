import React, { useState } from "react";
import '../ShopNowButton/ShopNow.css'

const ShopNow = () => {
    
    const[showOptions, setShowOptions] = useState(false);
    
    const handleButtonClick = () => {
        setShowOptions(true); // Show options when the Shop Now button is clicked
      };
    
      const handleHideClick = () => {
        setShowOptions(false); // Hide options when the Hide button is clicked
      };


    return (
        <div className="shopNowBtn">
            {!showOptions && (
        <button className="btn btn-lg midSecShopNowBtn" style={{backgroundColor: "#693621", color:"white"}} onClick={handleButtonClick}>
          Shop Now
        </button>
      )}

      {showOptions && (
        <div style={{ marginTop: '10px' }} className="midSecShopNow">
          <button  className="btn btn-lg midSecShopNowBtn" id="midSectionWatsapp" style={{backgroundColor: "green", color:"white"}} onClick={() => window.open('https://wa.me/919028875810', '_blank')}>
            WhatsApp
          </button>
          <button  className="btn btn-lg midSecShopNowBtn" id="midSectionLocation" style={{backgroundColor: "blue", color:"white"}} onClick={() => window.open('https://maps.app.goo.gl/3vZaiY845nKGLUZ69', '_blank')}>
            Location
          </button>
          <button  className="btn btn-lg midSecShopNowBtn" id="midSectionHide" style={{backgroundColor: "grey", color:"white"}} onClick={handleHideClick}>
            Hide
          </button>
        </div>
      )}
        </div>
    )
}

export default ShopNow;