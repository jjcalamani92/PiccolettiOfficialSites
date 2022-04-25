import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

interface Props {
	// currentValue: number;
	// maxValue: number;

	// //Methods
	// updatedQuantity: (newValue: number) => void;
}

export const Counter: FC<Props> = ({}) => {
	
	return (
    <div className="counter">
      <span>Cantidad:</span>
			<FontAwesomeIcon className="icon" icon={faMinusCircle} />
				<p>1</p>
			<FontAwesomeIcon className="icon" icon={faPlusCircle} />
		</div>  
  );
};
