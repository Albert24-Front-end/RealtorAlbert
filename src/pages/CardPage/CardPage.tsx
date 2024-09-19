import { Header } from "../../components";
import { SCCardPage } from "./CardPage.styled";
import { useParams } from "react-router-dom";
import Heading from "../../components/typography/Heading/Heading";
import { useGetCardbyIdQuery } from "../../store/API/cardAPI";
import  CardHouse  from "../../components/UI/CardHouse/CardHouse";


export const CardPage = () => {
  const { id } = useParams(); // Получаем id из URL

  const { data, isLoading} = useGetCardbyIdQuery(id!);  // Передаем его в запрос
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
                            />)}
      </section>
    </SCCardPage>
    
  );
};
// в CardPage пропсы карточки опираются на типы из IPropertyProps, переменные в скобках - на типы из types.ts => IGetCardbyIdResponse
