import { Box } from '@chakra-ui/react';

const MenuLink = ({ text, somethingElse }) => {
  return (
    <div>
      <Box className='menu-link'>
        <p>{text}</p>
      </Box>
      <hr className='break' />
    </div>
  );
};

export default MenuLink;
