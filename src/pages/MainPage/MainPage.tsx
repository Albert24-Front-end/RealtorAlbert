import Header from "../../components/UI/Header/Header";
import Input from "../../components/Input/Input";
import { SCMainPage } from "./MainPage.styled";
import Heading from "../../components/typography/Heading/Heading";
import MainBar from "../../components/MainBar/MainBar";
import { useGetPropertiesQuery } from "../../store/API/TestAPI";
import CardHouse from "../../components/UI/CardHouse/CardHouse";
import { Property } from "../../store/API/types";


export const MainPage = () => {
  const { data, error, isLoading } = useGetPropertiesQuery(null);
  console.log("Loading state:", isLoading);
  console.log("Error state:", error);
  console.log("Data:", data);

  if (isLoading) return <div className="loader"></div>;
  if (error) return <div>Error loading properties</div>;

  // Если данных нет, покажем сообщение
  if (!data?.hits?.length) return <div>No properties found</div>;
  return (
    <SCMainPage>
      <Header />
      <section className="upperMain">
        <Heading variant={"h1"} text={"The #1 site real estate professionals trust*"}/>
        <MainBar/>
          <Input type="text" placeholder="Address, School, City, Zip or Neighborhood" />
      </section>

      <section className="cards">
        <Heading variant={"h2"} text={"Homes for sale"}/>
        <div className="cards-wrapper">
        {data ? (data.hits.map((property: Property) => (
        <CardHouse
          key={property?.id} // Добавляем key для уникальности
          coverPhoto={property?.coverPhoto}
          price={property?.price}
          score={property?.score}
          rooms={property?.rooms}
          baths={property?.baths}
          area={Math.round(property?.area)}
          title={property?.title}
          location={property?.location}
          id={property.externalID} // используем externalID, так как это идентификатор в Bayut API
          />
        ))) : 
        (<h1>No homes at the moment</h1>
        )}
      </div>  
      </section>
    </SCMainPage>
  );
};
// в MainPage пропсы карточки опираются на типы из IPropertyProps, переменные в скобках - на типы из types.ts => Property
