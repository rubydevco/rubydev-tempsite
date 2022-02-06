import { Link } from '@chakra-ui/react';
import MenuLink from './MenuLink';
import MenuTitle from './MenuTitle';
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
    <div style={{top:'15vh !important'}}>
      {' '}
      <Link
        style={{ textDecoration: 'none' }}
        onClick={() => {
          changePage('home');
        }}
      >
        <MenuTitle />
      </Link>
      <Link
        style={{ textDecoration: 'none' }}
        onClick={() => {
          changePage('getting-started');
          window.scrollTo(0, 0)
        }}
      
      >
        <MenuLink text='Get Started' />
      </Link>
      <Link
        style={{ textDecoration: 'none' }}
        onClick={() => {
          changePage('portfolio');
          window.scrollTo(0, 0)
        }}
      >
        <MenuLink text='Portfolio' />
      </Link>
      <Link
        style={{ textDecoration: 'none' }}
        onClick={() => {
          changePage('about-us');
          window.scrollTo(0, 0)
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
