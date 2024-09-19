import { useState } from "react";
import { Link } from "react-router-dom";

    const MainBar = () => {
        const [activeSection, setActiveSection] = useState<string>('home'); 
      
        // Функция для смены активного раздела
        const handleMenuClick = (section: string) => {
          setActiveSection(section);
        };

    return(
        <div className="mainBar">
          <div className={`mainBar__option ${activeSection === 'buy' ? 'active': ''}`} onClick={()=> handleMenuClick('buy')}>
            <Link to="/main">Buy</Link>
          </div>
          <div className={`mainBar__option ${activeSection === 'rent' ? 'active': ''}`} onClick={()=> handleMenuClick('rent')}>
            <a href="#">Rent</a>
          </div>
          <div className={`mainBar__option ${activeSection === 'sell' ? 'active': ''}`} onClick={()=> handleMenuClick('sell')}>
            <a href="#">Sell</a>
          </div>
          <div className={`mainBar__option ${activeSection === 'pre-approval' ? 'active': ''}`} onClick={()=> handleMenuClick('pre-approval')}>
            <a href="#">Pre-approval</a>
          </div>
          <div className={`mainBar__option ${activeSection === 'just sold' ? 'active': ''}`} onClick={()=> handleMenuClick('just sold')}>
            <a href="#">Just sold</a>
          </div>
          <div className={`mainBar__option ${activeSection === 'home value' ? 'active': ''}`} onClick={()=> handleMenuClick('home value')}>
            <a href="#">Home value</a>
          </div>
        </div>
    );
};
export default MainBar;