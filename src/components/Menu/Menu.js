import { useState, useEffect } from 'react';
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

  const [width, setWidth] = useState(window.innerWidth);
  const [mobile, setMobile] = useState(true);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    if (width < 768) {
      setMobile(true);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    <div>
      {' '}
      <Link
        style={{ textDecoration: 'none' }}
        onClick={() => {
          changePage('home');
        }}
      >
        <MenuTitle />
      </Link>
      {mobile ? (
        <Link
          style={{ textDecoration: 'none' }}
          onClick={() => {
            changePage('getting-started');
          }}
          href='#getting-started'
        >
          <MenuLink text='Get Started' />
        </Link>
      ) : (
        <Link
          style={{ textDecoration: 'none' }}
          onClick={() => {
            changePage('getting-started');
          }}
        >
          <MenuLink text='Get Started' />
        </Link>
      )}
      <Link
        style={{ textDecoration: 'none' }}
        onClick={() => {
          changePage('portfolio');
        }}
        href='#portfolio'
      >
        <MenuLink text='Portfolio' />
      </Link>
      <Link
        style={{ textDecoration: 'none' }}
        onClick={() => {
          changePage('about-us');
        }}
        href='#about-us'
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
