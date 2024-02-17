import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faSearch,
  faHeart,
  faShop,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <div className='navigationContainer'>
      <Link to='/'>
        <span>
          <FontAwesomeIcon icon={faHouse} />
        </span>
      </Link>
      <Link to='/search'>
        <span>
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </Link>
      <Link to='/saved'>
        <span>
          <FontAwesomeIcon icon={faHeart} />
        </span>
      </Link>
      <Link to='/shop'>
        <span>
          <FontAwesomeIcon icon={faShop} />
        </span>
      </Link>
    </div>
  );
};

export default Navigation;
