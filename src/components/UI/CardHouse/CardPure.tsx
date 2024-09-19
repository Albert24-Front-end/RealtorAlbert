// import { Link } from "react-router-dom";
// import { useGetPropertiesQuery } from "../../../store/API/TestAPI";
// import { Property } from "../../../store/API/types";
// import { IoHeartOutline } from "react-icons/io5";
// import { TfiHummer } from "react-icons/tfi";
// import { PiGarageDuotone, PiMoney } from "react-icons/pi";
// import { RxRulerSquare } from "react-icons/rx";
// import { LuCalendarClock } from "react-icons/lu";
// import { GoHome } from "react-icons/go";


// export const CardPure = () => {
//   const { data, error, isLoading } = useGetPropertiesQuery(null);

//   if (isLoading) return <div className="loader"></div>;
//   if (error) return <div>Error loading properties</div>;

//   // Если данных нет, покажем сообщение
//   if (!data?.hits?.length) return <div>No properties found</div>;

//   return (
//     <div className="cards-area">
//      {data.hits.map((property: Property) => (
//     <div className="property-card"  key={property.id}>
//     <div className="image-gallery">
// <div className="large-image">
// <img src={property?.coverPhoto?.url} alt="House exterior"/>
// </div>
// <div className="small-images">
// <div className="small-image">
//   <img src={property?.photos?.[0]?.url} alt="Kitchen"/>
// </div>
// <div className="small-image">
//   <img src="/public/kitchen.webp" alt="Living room"/>
// </div>
// <div className="small-image">
//   <img src="/public/kitchen.webp" alt="Bathroom"/>
// </div>
// </div>
// </div>
//       <div className="property-card_main">
//       <div className="property-card__info">
//         <div className="property-card__price">${property?.price}</div>
//         <div className="property-card__details">
//             <div className="property-card__beds">{property?.rooms} bed &bull;</div>
//             <div className="property-card__baths">{property?.baths} bath &bull; </div>
//             <div className="property-card__area">{property?.area} sqft</div>
//             {/* <div className="property-card__area-lot">10000 sqft lot</div> */}
//         </div>
//         <div className="property-card__address">
//           <div className="property-card__address-city">{property?.title}</div>
//           <div className="property-card__address-country">{property?.location?.[0]?.name}</div>
//         </div>
//       </div>
//         <div className="additional-info">
//           <div className="info-block">
//             <GoHome size={20}/>
//             <div className="info-text">
//               <p>Single family</p>
//               <span>Property type</span>
//             </div>
//           </div>
//           <div className="info-block">
//             <LuCalendarClock size={20}/>
//             <div className="info-text">
//               <p>21 hours</p>
//               <span>On Realtor.com</span>
//             </div>
//           </div>
//           <div className="info-block">
//             <PiMoney size={20}/>
//             <div className="info-text">
//               <p>$35/mo</p>
//               <span>HOA fees</span>
//             </div>
//           </div>
//           <div className="info-block">
//             <RxRulerSquare size={20}/>
//             <div className="info-text">
//               <p>$194</p>
//               <span>Price per sqft</span>
//             </div>
//           </div>
//           <div className="info-block">
//             <PiGarageDuotone size={20}/>
//             <div className="info-text">
//               <p>3 Cars</p>
//               <span>Garage</span>
//             </div>
//           </div>
//           <div className="info-block">
//             <TfiHummer size={20}/>
//             <div className="info-text">
//               <p>1989</p>
//               <span>Year built</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     ))}
//   <button className="property-card__button"><a href="#">Ask a question</a></button>
// </div>
//   );
// };