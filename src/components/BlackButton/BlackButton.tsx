import { Link } from "react-router-dom";

interface BlackButtonProps {
    text: string;
}
const BlackButton = ({text}: BlackButtonProps) => {
    return (
        <button className="Header__button-black"><Link to="/">{text}</Link></button>
    );
};

export default BlackButton;