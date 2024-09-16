import React from "react"
import { useGetPropertiesQuery } from "../../../store/API/TestAPI";
import { Property } from "../../../store/API/types";



// const CardHouse: React.FC<HouseProps> = ({ house }) => {
//   if (!house) {
//     return <div>No house data available</div>;
//   }

//   return (
//     <div className="property-card">
//       <div className="property-card__header">
//         {house.coverPhoto && house.coverPhoto.url ? (
//           <img
//             src={house.coverPhoto.url}
//             alt="House"
//             className="property-card__image"
//           />
//         ) : (
//           <div className="property-card__image-placeholder">No Image Available</div>
//         )}
//         <button className="property-card__favorite">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="feather feather-heart"
//           >
//             <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
//           </svg>
//         </button>
//       </div>
//       <div className="property-card__info">
//         <div className="property-card__price">
//           {house.price ? `$${house.price.toLocaleString()}` : 'Price not available'}
//         </div>
//         <div className="property-card__details">
//           <div className="property-card__beds">{house.rooms || 'N/A'} bed</div>
//           <div className="property-card__baths">{house.baths || 'N/A'} bath</div>
//           <div className="property-card__area">{house.area || 'N/A'} sqft</div>
//         </div>
//         <div className="property-card__address">
//           <div>{house.title || 'Address not available'}</div>
//           <div>{house.location?.city || 'City not available'}</div>
//         </div>
//         <button className="property-card__button">Email Agent</button>
//       </div>
//     </div>
//   );
// };

// export default CardHouse;

export const CardHouse = () => {
  const { data, error, isLoading } = useGetPropertiesQuery(null);

  if (isLoading) return <div className="loader"></div>;
  if (error) return <div>Error loading properties</div>;

  // Если данных нет, покажем сообщение
  if (!data?.hits?.length) return <div>No properties found</div>;

  return (
      <>
      {data.hits.map((property: Property) => (
        <div className="property-card" key={property.id}>
          <div className="property-card__header">
            <img src={property?.coverPhoto?.url} alt="Image" className="property-card__image" />
            <button className="property-card__favorite">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-heart"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>
          <div className="property-card__info">
            <div className="property-card__price">${property?.price}</div>
            <div className="property-card__details">
                <div className="property-card__beds">{property?.rooms} bed &bull;</div>
                <div className="property-card__baths">{property?.baths} bath &bull;</div>
                <div className="property-card__area">{property?.area} sqft</div>
            </div>
            <div className="property-card__address">
              <div>{property?.title}</div>
              <div>{property?.location?.[0]?.name}</div>
            </div>
            <button className="property-card__button"><a href="#">Email Agent</a></button>
          </div>
        </div>
      ))}
    </>
  );
};