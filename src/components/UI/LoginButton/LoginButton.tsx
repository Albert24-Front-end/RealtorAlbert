interface ILoginButton {
    text: string;
    type: "submit" | "reset" | "button" | undefined;
    disabled?: boolean;
    onClick?: () => void;
  }
  
  const LoginButton = ({ text, onClick, type, disabled }: ILoginButton) => {
    return (
      <button type={type} disabled={disabled} onClick={onClick}>
        {text}
      </button>
    );
  };
  
  export default LoginButton;
  