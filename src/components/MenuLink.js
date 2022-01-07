import { Box } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';

const MenuLink = ({ text }) => {
  return (
    <div>
      <Link
        href='https://chakra-ui.com'
        isExternal
        style={{ textDecoration: 'none' }}
      >
        <Box className='menu-link'>{text}</Box>
      </Link>
      <hr />
    </div>
  );
};

export default MenuLink;
