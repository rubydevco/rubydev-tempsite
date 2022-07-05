import { Link, IconButton, Box, Center } from '@chakra-ui/react';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdMail } from 'react-icons/md'

const MenuFooter = () => {
  return (
    <div className='footer'>
      <Box mt='4'>
        <Center>
          <Link
            href='mailto:info@rubydev.ca'
            isExternal
            pr={2}
            className='social'
          >
            <IconButton
              size='lg'
              aria-label='Mail Link'
              icon={<MdMail />}
              bg='gray.800'
              color='white'
            />
          </Link>
          <Link
            href='https://www.linkedin.com/company/ruby-dev'
            isExternal
            pr={2}
            className='social'
          >
            <IconButton
              size='lg'
              aria-label='Linkedin Link'
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
