import Header from "../../components/UI/Header/Header";
import Input from "../../components/Input/Input";
import { SCMainPage } from "./MainPage.styled";
import Heading from "../../components/typography/Heading/Heading";
import MainBar from "../../components/MainBar/MainBar";
import { useGetPropertiesQuery } from "../../store/API/TestAPI";
import CardHouse from "../../components/UI/CardHouse/CardHouse";
import { Property } from "../../store/API/types";
import { useEffect, useState } from "react";


export const MainPage = () => {
  const { data, error, isLoading } = useGetPropertiesQuery(null);
  // console.log("Loading state:", isLoading);
  // console.log("Error state:", error);
  console.log("Data:", data);
  const [favouriteCards, setFavouriteCards] = useState<Property[]>([]);

  const [searchQuery, setSearchQuery] = useState(""); // Стейт для поиска
  const [filteredCards, setFilteredCards] = useState<Property[]>([]); // Стейт для отфильтрованных карточек
  
   // Инициализация избранных карточек из localStorage при первом рендере
   useEffect(() => {
    const storedFavourites = localStorage.getItem("favourites");
    if (storedFavourites) {
      setFavouriteCards(JSON.parse(storedFavourites));
    }
  }, []);

  // Обновляем localStorage при каждом изменении favouriteCards
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favouriteCards));
  }, [favouriteCards]);

  // Фильтрация карточек по запросу
  useEffect(() => {
    if (data && searchQuery) {
      const filtered = data.hits.filter((property: Property) => 
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.some(loc => loc.name.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFilteredCards(filtered);
    } else {
      setFilteredCards(data?.hits || []);
    }
  }, [data, searchQuery]);

  const clickHandler = (property: Property) => {
  
    const isFavourite = favouriteCards.some(favCard => favCard.id === property.id);
  
    if (isFavourite) {
      // Если пост уже в избранном, удаляем его
      const updatedFavourites = favouriteCards.filter(favCard => favCard.id !== property.id);
      setFavouriteCards(updatedFavourites);
      console.log('Updated Favourites after removal:', updatedFavourites);
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites))
    } else {
      const updatedFavourites = [...favouriteCards, property];
      setFavouriteCards(updatedFavourites);
      console.log('Updated Favourites after addition:', updatedFavourites);
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites))
    }
  };

   const handleSearch = () => {
      // Поиск активируется по нажатию на кнопку
      console.log("Search query:", searchQuery);
    };

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
          <Input 
          type="text" 
          placeholder="Address, School, City, Zip or Neighborhood"  
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)}
          onSearchClick = {handleSearch} />
      </section>

      <section className="cards">
        <Heading variant={"h2"} text={"Homes for sale"}/>
        <div className="cards-wrapper">
        {filteredCards.length > 0 ? (
            filteredCards.map((property: Property) => (
              <CardHouse
                key={property.id}
                coverPhoto={property.coverPhoto}
                price={property.price}
                score={property.score}
                rooms={property.rooms}
                baths={property.baths}
                area={Math.round(property.area)}
                title={property.title}
                location={property.location}
                id={property.externalID}
                isFavourite={favouriteCards.some(favCard => favCard.id == property.id)}
                onAddFavouritesClick={() => clickHandler(property)}
              />
            ))
          ) : (
            <h1>No homes matching your search</h1>
          )}
      </div>  
      </section>
    </SCMainPage>
  );
};
// в MainPage пропсы карточки опираются на типы из IPropertyProps, переменные в скобках - на типы из types.ts => Property
