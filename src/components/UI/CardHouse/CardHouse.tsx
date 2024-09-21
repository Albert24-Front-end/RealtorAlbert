import { Link } from "react-router-dom";
import { useGetPropertiesQuery } from "../../../store/API/TestAPI";
import { IoHeartOutline } from "react-icons/io5";

interface IPropertyProps {
  id: string;
  price: number;
  rooms: number;
  baths: number;
  area: number;
  title: string;
  coverPhoto: {
      url: string;
  };
  location: {
      name: string;
  }[];
  score: number;
  onAddFavouritesClick?: () => void;
  isFavourite?: boolean;
}

const CardHouse = ({id, coverPhoto, price, rooms, baths, area, title, location, score, isFavourite, onAddFavouritesClick}: IPropertyProps) => {
  const { data, error, isLoading } = useGetPropertiesQuery(null);

  if (isLoading) return <div className="loader"></div>;
  if (error) return <div>Error loading properties</div>;

  // Если данных нет, покажем сообщение
  if (!data?.hits?.length) return <div>No properties found</div>;

  return (
      <div className="cards-area">
        <div className="property-card" key={id}>
          <div className="property-card__header">
            <img src={coverPhoto?.url} alt="Image" className="property-card__image" />
            <button className="property-card__favorite" onClick={onAddFavouritesClick}>
            <IoHeartOutline size={24} strokeWidth={40} stroke={isFavourite ? "" : "red"} color={isFavourite ? "red" : "white"}/>
            </button>
          </div>
          <div className="vertical-line"></div>
          <div className="property-card__info">
            <div className="property-card__price">${price}</div>
            <div className="property-card__rating">Rating: {score} out of 100</div>
            <div className="property-card__details">
                <div className="property-card__beds">&bull; {rooms} bed</div>
                <div className="property-card__baths">&bull; {baths} bath</div>
                <div className="property-card__area">&bull; {area} sqft</div>
            </div>
            <div className="property-card__address">
              <div>{title}</div>
              <div>{location?.[0]?.name}</div>
            </div>
            <button className="property-card__button"><Link to={`/card/${id}`}>See more</Link></button>
          </div>
        </div>
     
    </div>
  );
};
export default CardHouse;