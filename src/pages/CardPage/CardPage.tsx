import { Header } from "../../components";
import { SCCardPage } from "./CardPage.styled";
import { useParams } from "react-router-dom";
import Heading from "../../components/typography/Heading/Heading";
import { useGetCardbyIdQuery } from "../../store/API/cardAPI";
import  CardHouse  from "../../components/UI/CardHouse/CardHouse";


export const CardPage = () => {
  const { id } = useParams(); // Получаем id из URL с помощью хука из react-router-dom, что позволяет определить, какая карточка должна быть загружена

  const { data, isLoading} = useGetCardbyIdQuery(id!);  // Передаем id карточки в запрос на API по получению данных конкретной карточки 
  return (
    <SCCardPage>
      <Header />
      <section className="cards">
        <Heading variant={"h2"} text={"Some home details"}/>
        {isLoading && <Heading text="Loading..." variant="h1"/>}
        {data && (<CardHouse
                          id={data?.externalID} // Обязательно проверяем, что передается правильный идентификатор
                          price={data?.price}
                          rooms={data?.rooms}
                          baths={data?.baths}
                          area={Math.round(data?.area)}
                          title={data?.title}
                          location={data?.location}
                          score={data?.score}
                          coverPhoto={data?.coverPhoto}
                          purpose={data?.purpose}
                          contactName={data?.contactName}
                          phoneNumber={data?.phoneNumber}
                          type={data?.type}
                          product={data?.product}
                          category={data?.category}
                            />)}
      </section>
    </SCCardPage>
    
  );
};
// в CardPage пропсы карточки опираются на типы из IPropertyProps, переменные в скобках - на типы из types.ts => IGetCardbyIdResponse
