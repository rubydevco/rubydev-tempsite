import { Link } from '@chakra-ui/react';
import MenuLink from './MenuLink';
import Title from './Title';
import MenuFooter from './MenuFooter';
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
    <div>
      <Title />
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
      <MenuFooter />
    </div>
  );
};

export default Menu;
