import { Link, IconButton, Box, Center } from '@chakra-ui/react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const MenuFooter = () => {
  return (
    <div className='footer'>
      <Box mt='4'>
        <Center>
          <Link
            href='https://www.instagram.com/onyxonlinehq/'
            isExternal
            pr={2}
            className='social'
          >
            <IconButton
              size='md'
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
              size='md'
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
              size='md'
              aria-label='Twitter Link'
              icon={<FaTwitter />}
              bg='gray.800'
              color='white'
            />
          </Link>
        </Center>
      </Box>
    </div>
  );
};

export default MenuFooter;
