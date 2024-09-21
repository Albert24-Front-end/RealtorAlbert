import styled from "styled-components";

export const SCMainPage = styled.div`
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

.upperMain {
    background-image: url("/public/hp-hero-desktop-background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 40px 400px;
    text-align: center;
    background-position: center;
}

.upperMain h1 {
    font-size: 56px;
    line-height: 64px;
    font-weight: 700;
    text-align: inherit;
    color: rgb(255, 255, 255);
    word-break: normal;
    margin-bottom: 40px;
}

.mainBar {
    display: flex;
    gap: 5px;
    justify-content: space-around;
    padding: 0 10px;
}

.mainBar__option {
    font-size: 16px;
    font-weight: 500;
    height: 100%;
    line-height: 24px;
    position: relative;
    transition: color 0.3s ease;
}

.mainBar__option::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 0;
  height: 4px;
  background-color: white;
  /* transition: width 0.3s ease; */
}

.mainBar__option:hover::after,
.mainBar__option.active::after {
  width: 100%;
}

.mainBar__option.active {
  font-weight: bold;
  color: #007bff; /* Цвет активного элемента */
}

.mainBar__option a {
    color: rgb(255, 255, 255);
}

.search-container {
    position: relative;
    width: 550px;
    margin: 40px auto 80px;
}

.search-input {
    width: 100%;
    padding: 12px 20px;
    padding-right: 50px; /* место для кнопки поиска */
    border: 1px solid #ccc;
    border-radius: 50px; /* закругленные углы */
    font-size: 16px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    outline: none;
}

.search-input::placeholder {
    color: #8a7970; /* цвет текста placeholder */
    font-size: 16px;
}

.search-btn {
    position: absolute;
    top: 50%;
    right: 4px;
    transform: translateY(-50%);
    background-color: black; /* цвет кнопки */
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.search-btn svg {
    fill: white; /* цвет значка поиска */
}

.search-btn:hover {
    background-color: #555; /* изменение цвета кнопки при наведении */
}

.cards-wrapper {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  list-style-type: none;
  width: 100%;
}
.cards {
  padding: 16px;
}
.cards-area {
  margin-top: 16px;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  list-style-type: none;
  width: 100%;
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
  max-width: 500px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  font-family: Arial, sans-serif;
}

/* Шапка карточки */
.property-card__header {
  position: relative;
  width: 100%;
  height: 350px; /* Фиксированная высота для изображений */
  overflow: hidden;
}

/* Изображение дома */
.property-card__image {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #ddd;
  object-fit: cover;
}

/* Кнопка избранного с сердечком */
.property-card__favorite {
  position: absolute;
  bottom: 20px;
  right: 15px;
  width: 48px;
  height: 48px;
  background-color: white;
  border: 1px solid #ff0000;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 0; 
}

.property-card__favorite:hover {
  background-color: #f0f0f0;
}

.property-card__favorite svg {
  stroke: #ff0000;
  display: block; /* Добавляем display: block для точного центрирования */
  margin: 0 auto; /* Гарантируем отсутствие автоматических отступов */
}

/* Информация о недвижимости */
.property-card__info {
  padding: 16px;
  font-family: Arial, sans-serif;
   flex-grow: 1; /* Расширяет блок с информацией для равномерного распределения */
}

/* Цена */
.property-card__price {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.property-card__rating{
  margin-bottom: 10px;
}

/* Детали (кол-во комнат, ванных, площадь) */
.property-card__details {
  display: flex;
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
}

.property-card_info-footer {
  display: flex;
  justify-content: space-between;
}

/* Адрес */
.property-card__address {
  font-size: 14px;
  color: #777;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

/* Кнопка */
.property-card__button {
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
    color: rgb(26, 24, 22);
    background-color: rgb(255, 255, 255);
}

.property-card__button:hover {
  background-color: #f0f0f0;
}

`