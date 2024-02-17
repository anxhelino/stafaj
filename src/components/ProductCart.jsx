import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import toyPic from '../assets/images/toy.jpg';
import BuyButton from './BuyButton';
const ProductCart = () => {
  return (
    <div className='productCart'>
      <FontAwesomeIcon icon={faHeart} />
      <img src={toyPic} alt='Loder' />
      <h3>Loder</h3>
      <BuyButton />
    </div>
  );
};

export default ProductCart;
