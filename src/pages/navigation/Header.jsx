import stafajImg from '../../assets/images/stafaj1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
    <div className='headerContainer'>
      <div className='logo'>
        <img src={stafajImg} alt='Stafaj Logo' />
      </div>
      <div className='rrethNeshText'>
        <FontAwesomeIcon icon={faAddressCard} />
        <h4>Rreth Nesh</h4>
      </div>
    </div>
  );
};

export default Header;
