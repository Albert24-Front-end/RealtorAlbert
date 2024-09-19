import styled from "styled-components";

export const SCCardPage = styled.div`
  .Header {
    display: flex;
    justify-content: space-between;
    height: 50px;
    border-bottom: 1px solid rgb(190, 184, 176);
    background-color: rgb(255, 255, 255);
    position: relative;
    padding: 15px 40px;
}

.Header__logo {
    width: 142px;
    height: 46px;
    margin-left: 25px;
}

.Header__bar {
  margin-left: 35px;
  display: flex;
  justify-content: space-between;
  gap: 100px;
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 500;
}

.Header__services {
  margin-left: 85px;
  display: flex;
  justify-content: space-between;
  gap: 25px;
  text-decoration: underline;
  font-weight: 600;
  font-size: 16px;
}

.Header__buttons {
  margin-left: 85px;
  display: flex;
  gap: 25px;
  align-items: center;
}

.Header__login {
  border: none;
  background: transparent;
  text-align: inherit;
  color: rgb(26, 24, 22);
  word-break: normal;
}

.Header__button-black {
  align-items: center;
  background-image: none;
  cursor: pointer;
  display: inline-flex;
  gap: 8px;
  -webkit-box-pack: center;
  justify-content: center;
  line-height: 1;
  touch-action: manipulation;
  transition: background-color 100ms cubic-bezier(0.5, 0, 0.2, 1), color 100ms cubic-bezier(0.5, 0, 0.2, 1), border-color 100ms cubic-bezier(0.5, 0, 0.2, 1);
  user-select: none;
  white-space: nowrap;
  vertical-align: middle;
  font-size: 16px;
  border-radius: 40px;
  border: 1px solid rgb(26, 24, 22);
  text-decoration: none;
  height: 36px;
  padding: 0px 16px;
  font-weight: 500;
 
  background-color: rgb(26, 24, 22);
}
.Header__button-black a {
   color: rgb(255, 255, 255);
} 

.cards {
  padding: 16px;
}
.cards-area {
  margin-top: 16px;
  list-style-type: none;
}

.loader {
  width: fit-content;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 30px;
  padding-bottom: 8px;
  background: linear-gradient(currentColor 0 0) 0 100%/0% 3px no-repeat;
  animation: l2 2s linear infinite;
}
.loader:before {
  content:"Loading..."
}
@keyframes l2 {to{background-size: 100% 3px}}

/* Блок карточки недвижимости */
.property-card {
  width: 100%;
  /* border: 1px solid #ddd; */
  /* border-radius: 10px; */
  overflow: hidden;
  font-family: Arial, sans-serif;
  display: flex;
  gap: 50px; 
  position: relative;
}

.vertical-line {
  width: 2px; /* Ширина линии */
  height: auto; /* Высота линии (можно изменить под нужную длину) */
  background-color: black; /* Цвет линии */
  margin: 0 auto; /* Центрирование линии по горизонтали */
  background-color: #ff0000;
}

.property-card__image {
  border-radius: 20px;
  max-width: 600px;
  object-fit: cover;
  width: 100%;
  height: 100%;
}

/* Кнопка избранного с сердечком */
.property-card__favorite {
  display: none;
}

/* Информация о недвижимости */
.property-card__info {
  padding-top: 16px;
  font-family: Arial, sans-serif;
  flex-grow: 1; /* Расширяет блок с информацией для равномерного распределения */
}

/* Цена */
.property-card__price {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
}

.property-card__rating{
  margin-bottom: 10px;
  font-size: 18px;
} 

/* Детали (кол-во комнат, ванных, площадь) */
.property-card__details {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
}

.property-card__beds,
.property-card__baths,
.property-card__area
{
  font-weight: bold;
  font-size: 18px;
}

/* Адрес */
.property-card__address {
  font-size: 18px;
  color: #777;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.additional-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 50px;
  max-width: 500px;
  margin-bottom: 16px;
}

.info-block {
  width: 130px;
  text-align: center;
}

.info-block img {
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
}

.info-text p {
  font-size: 16px;
  margin: 0;
}

.info-text span {
  font-size: 12px;
  color: #777;
  margin-top: 4px;
  display: block;
}

/* Кнопка */
.property-card__button {
  display: none;
}

.property-card__button:hover {
  background-color: #f0f0f0;
}
`