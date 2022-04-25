import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
export const FooterHorario = () => {
  return (
    <div className="box">
      <h3>Horarios de atención</h3>
        <p className="links" >
          <FontAwesomeIcon className="icon" icon={faClock} />
          Lunes <span>09:00am - 10:30pm</span>
        </p>
        <p className="links" >
          <FontAwesomeIcon className="icon" icon={faClock} />
          Martes <span>09:00am - 10:30pm</span>
        </p>
        <p className="links" >
          <FontAwesomeIcon className="icon" icon={faClock} />
          Miercoles <span>09:00am - 10:30pm</span>
        </p>
        <p className="links" >
          <FontAwesomeIcon className="icon" icon={faClock} />
          Jueves <span>09:00am - 10:30pm</span>
        </p>
        <p className="links" >
          <FontAwesomeIcon className="icon" icon={faClock} />
          Viernes <span>09:00am - 10:30pm</span>
        </p>
        <p className="links" >
          <FontAwesomeIcon className="icon" icon={faClock} />
          Sabados <span>09:00am - 10:30pm</span>
        </p>
    </div>
  );
};
