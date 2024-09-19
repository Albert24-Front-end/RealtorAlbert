import styled from "styled-components";

export const SCProfilePage = styled.div`
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


`