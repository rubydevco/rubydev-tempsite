import { Link } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const MenuFooter = () => {
  return (
    <div className='footer'>
      <Link
        href='https://www.instagram.com/onyxonlinehq/'
        isExternal
        pr={2}
        className='social'
      >
        <IconButton
          size='sm'
          aria-label='Instagram Link'
          icon={<FaInstagram />}
          bg='gray.800'
          color='white'
        />
      </Link>

      <Link
        href='https://www.facebook.com/ONYXOnlineHQ/'
        isExternal
        pr={2}
        className='social'
      >
        <IconButton
          size='sm'
          aria-label='Facebook Link'
          icon={<FaFacebookF />}
          bg='gray.800'
          color='white'
        />
      </Link>

      <Link
        href='https://twitter.com/onyxonlinehq'
        isExternal
        pr={2}
        className='social'
      >
        <IconButton
          size='sm'
          aria-label='Twitter Link'
          icon={<FaTwitter />}
          bg='gray.800'
          color='white'
        />
      </Link>
    </div>
  );
};

export default MenuFooter;
