interface ILoginInputProps {
    type: string;
    placeholder: string;
    isError: boolean;
    errorMessage: string | undefined;
}
const LoginInput =({type, placeholder, isError, errorMessage, ...props}: ILoginInputProps)=> {
    return (
        <>
            <input type={type} placeholder={placeholder} {...props} />
            {isError && (
                <span style={ {color: "red", fontWeight: 700, fontStyle: "italic"} }>{errorMessage}</span>
            )}
        </>
    );
};
export default LoginInput;