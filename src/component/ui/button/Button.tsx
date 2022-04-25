import { faWhatsapp, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ButtonPrimary = (props: any) => {
  const { title, className, handleclick } = props;
  return (
    <button className={`${className}`} onClick={handleclick}>
      {title}
      {/* <FontAwesomeIcon className="icon" icon={faUser} /> */}
    </button>
  );
};
