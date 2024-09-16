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
}

.mainBar__option a {
    color: rgb(255, 255, 255);
}

.search-container {
    position: relative;
    width: 550px;
    margin: 20px auto 80px;
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

.cards {
  padding: 16px;
}
.cards-area {
  margin-top: 16px;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  list-style-type: none;
}

.loader {
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  display: inline-grid;
}
.loader:before,
.loader:after {
  content:"Loading...";
  grid-area: 1/1;
  -webkit-mask:linear-gradient(90deg,#000 50%,#0000 0) 0 50%/2ch 100%;
  animation: l11 1s infinite cubic-bezier(0.5,220,0.5,-220);
}
.loader:after {
  -webkit-mask-position:1ch 50%;
  --s:-1;
}
@keyframes l11 {100%{transform: translateY(calc(var(--s,1)*0.1%));}}

/* Блок карточки недвижимости */
.property-card {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  font-family: Arial, sans-serif;
}

/* Шапка карточки */
.property-card__header {
  position: relative;
}

/* Статус */
.property-card__status {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #007bff;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
}

.property-card__status--new {
  background-color: #007bff; /* Синий цвет для статуса "New" */
}

/* Изображение дома */
.property-card__image {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
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
  
}

.property-card__favorite:hover {
  background-color: #f0f0f0;
}

.property-card__favorite svg {
  stroke: #ff0000; /* Красный цвет сердечка */
}

/* Информация о недвижимости */
.property-card__info {
  padding: 16px;
  font-family: Arial, sans-serif;
}

/* Статус: дом в продаже */
.property-card__status {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
}

.property-card__status-dot {
  width: 10px;
  height: 10px;
  background-color: #4caf50; /* Зелёный круг для статуса */
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
}

/* Цена */
.property-card__price {
  font-size: 24px;
  font-weight: bold;
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
.property-card__area,
.property-card__lot-size {
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