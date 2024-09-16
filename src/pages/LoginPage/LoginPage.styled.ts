import styled from "styled-components";

export const SCLoginPage = styled.div`
  box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.elemsBgc};
  margin: 40px auto;
  width: 80%;
  max-width: 500px;
  text-align: center;
  padding: 40px 60px;
// все цвета как lightGray
  h1 {
    margin-bottom: 50px;
    font-size: 28px;
    font-weight: 500;
    color: #52d389;
  }

  input {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    border: 2px solid lightblue;
    background-color: transparent;
    padding: 12px 15px;
    border-radius: 10px;
    transition: 200ms;
    font-size: 16px;
    line-height: 1.15;
    color: black;

    &:last-child {
      margin-bottom: 40px;
    }

    &:is(:hover, :focus) {
      border-color: darkblue;
    }
  }

  button {
    width: 100%;
    margin-bottom: 30px;
    cursor: pointer;
    padding: 12px 15px;
    font-size: inherit;
    border-radius: 10px;
    background-color: #52d389;
    color: white;
    transition: 200ms;
    border: 1px solid transparent;
  }

  a {
    display: inline-block;
    width: 100%;
    text-align: center;
    text-decoration: none;
    color: darkgray;

    &:hover {
      text-decoration: underline;
    }
  }


@media (max-width: 530px) {
  .LoginPage {
    width: 100%;
  }
}

.registration {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid ${(props) => props.theme.colors.lightGray};

  span {
    display: inline-block;
    font-size: 16px;
    margin-bottom: 40px;
    color: #52d389;

    a {
      display: inline;
      color: ${(props) => props.theme.colors.primeColor};
    }
  }

  p {
    margin-bottom: 30px;
    color: #52d389;
  }
}
.icons-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
}
.icon {
  width: 100%;
  height: 100%;
}
.reg__link {
  flex: 0 0 58px;
  transition: 200ms;

  &:hover {
    scale: 1.1;
  }

  &:active {
    scale: 0.9;
    transition: 100ms;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
`