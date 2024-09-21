import { useEffect, useState } from "react";
import { Header } from "../../components";
import Heading from "../../components/typography/Heading/Heading";
import { SCFavouritesPage } from "./FavouritesPage.styled";
import { Property } from "../../store/API/types";
import CardHouse from "../../components/UI/CardHouse/CardHouse";

export const FavouritesPage = () => {
    const [favouriteCards, setFavouriteCards] = useState<Property[]>([]);

    // Получаем избранные карточки из localStorage при первом рендере
    useEffect(() => {
      const storedFavourites = localStorage.getItem("favourites");
      if (storedFavourites) {
        setFavouriteCards(JSON.parse(storedFavourites));
      }
    }, []);
  return (
    <SCFavouritesPage>
      <Header />
      <section className="cards">
        <Heading variant={"h2"} text={"Saved favourites"}/>
        <div className="cards-wrapper">
        {favouriteCards.length > 0 ? (
            favouriteCards.map((property: Property) => (
              <CardHouse
                key={property?.id}
                id={property?.id}
                coverPhoto={property?.coverPhoto}
                price={property?.price}
                rooms={property?.rooms}
                baths={property?.baths}
                area={property?.area}
                title={property?.title}
                location={property?.location}
                score={property?.score}
                isFavourite={true} // В избранном всегда true
                onAddFavouritesClick={() => {
                  const updatedFavourites = favouriteCards.filter(fav => fav.id !== property.id);
                  setFavouriteCards(updatedFavourites);
                  localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
                }}
              />
            ))
          ) : (
            <h3>No favourite options saved</h3>
          )}
      </div>  
      </section>
    </SCFavouritesPage>
    
  );
};