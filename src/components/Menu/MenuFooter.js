import { Link, IconButton, Box, Center } from '@chakra-ui/react';
import { FaLinkedinIn } from 'react-icons/fa';

const MenuFooter = () => {
  return (
    <div className='footer'>
      <Box mt='4'>
        <Center>
          <Link
            href='https://www.linkedin.com/company/ruby-dev'
            isExternal
            pr={2}
            className='social'
          >
            <IconButton
              size='md'
              aria-label='Instagram Link'
              icon={<FaLinkedinIn />}
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
