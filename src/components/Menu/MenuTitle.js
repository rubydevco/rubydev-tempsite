import { Link } from '@chakra-ui/react';
import logo from '../../images/OnyxOnline+logo+text+2.png';

const Title = ( {changePage }) => {
  return <div className='title'>
    <Link 
      onClick={() => {
          changePage('');
        }}
      >
    <img src={logo} alt='logo'></img>
    
    </Link>
  </div>;
};

export default Title;