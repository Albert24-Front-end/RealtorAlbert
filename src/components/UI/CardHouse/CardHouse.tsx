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
  purpose?: string;
  contactName?: string;
  phoneNumber?: {
    phone: number;
    mobile: number;
    whatsapp: number;
  };
  type?: string;
  product?: string;
  category?: {
    name: string
  }[];
  onAddFavouritesClick?: () => void;
  isFavourite?: boolean;
}

const CardHouse = ({id, coverPhoto, price, rooms, baths, area, title, location, score, purpose, contactName, phoneNumber, type, product, category, isFavourite, onAddFavouritesClick}: IPropertyProps) => {
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
            <div className="property-card__product">Product status: {product}</div>
            <div className="property-card__details">
                <div className="property-card__beds">&bull; {rooms} bed</div>
                <div className="property-card__baths">&bull; {baths} bath</div>
                <div className="property-card__area">&bull; {area} sqft</div>
            </div>
            <div className="property-card__purpose">Purpose: {purpose}</div>
            <div className="property-card__type">Type: {type}</div>
            <div className="property-card__category">Category: {category?.[0]?.name}</div>
            
            <div className="property-card__contacts">
              <div className="property-card__contactName">Realtor: {contactName}</div>
              <div className="property-card__phone">Realtor's contacts: <br />&bull; Phone: {phoneNumber?.phone || "No phone"} <br />&bull; Mobile: {phoneNumber?.mobile || "No mobile"} <br />&bull; WhatsApp: +{phoneNumber?.whatsapp || "No WhatsApp"}</div>
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