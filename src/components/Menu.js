import { Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import MenuLink from './MenuLink';
import { useColorMode } from '@chakra-ui/react';
const Menu = ({ changePage }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  var darkModeText = 'Dark Mode';
  if (colorMode === 'dark') {
    darkModeText = 'Light Mode';
  } else {
    darkModeText = 'Dark Mode';
  }

  return (
    <>
      {/* <Grid templateColumns='repeat(10, 1fr)' gap={1}>
        <GridItem colSpan={{ base: 10, md: 4, lg: 4 }}> */}
      {/* <Center m={4}>
        <Box bg='black' w='70%' p={4} color='white'> */}
      <Link
        style={{ textDecoration: 'none' }}
        onClick={() => {
          changePage('getting-started');
        }}
      >
        <MenuLink text='Get Started' />
      </Link>
      <Link
        style={{ textDecoration: 'none' }}
        onClick={() => {
          changePage('portfolio');
        }}
      >
        <MenuLink text='Portfolio' />
      </Link>
      <Link
        style={{ textDecoration: 'none' }}
        onClick={() => {
          changePage('about-us');
        }}
      >
        <MenuLink text='About Us' />
      </Link>
      <Link onClick={toggleColorMode} style={{ textDecoration: 'none' }}>
        <MenuLink text={darkModeText} />
      </Link>
      {/* </Box>
      </Center> */}
      {/* </GridItem>
      </Grid> */}
    </>
  );
};

export default Menu;
