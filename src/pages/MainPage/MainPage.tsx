import Header from "../../components/UI/Header/Header";
import Input from "../../components/Input/Input";
import { SCMainPage } from "./MainPage.styled";
import Heading from "../../components/typography/Heading/Heading";
import { CardHouse } from "../../components/UI/CardHouse/CardHouse";


export const MainPage = () => {
  return (
    <SCMainPage>
      <Header />
      <section className="upperMain">
        <Heading variant={"h1"} text={"The #1 site real estate professionals trust*"}/>
        <div className="mainBar">
          <div className="mainBar__option">
            <a href="#">Buy</a>
          </div>
          <div className="mainBar__option">
            <a href="#">Rent</a>
          </div>
          <div className="mainBar__option">
            <a href="#">Sell</a>
          </div>
          <div className="mainBar__option">
            <a href="#">Pre-approval</a>
          </div>
          <div className="mainBar__option">
            <a href="#">Just sold</a>
          </div>
          <div className="mainBar__option">
            <a href="#">Home value</a>
          </div>
        </div>
        
        <div className="search-container">
          <Input type="text" placeholder="Address, School, City, Zip or Neighborhood" />
        </div>
        
      </section>
      <section className="cards">
        <Heading variant={"h2"} text={"Homes for sale"}/>
        <div className="cards-area">
          <CardHouse/>
        </div>
        
      </section>
    </SCMainPage>
  );
};
