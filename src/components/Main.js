import { useState, useEffect } from 'react';

import { Grid, GridItem, Center, Box } from '@chakra-ui/react';

import Menu from './Menu/Menu';
import CanvasMenu from '../js/CanvasMenu';

import GettingStarted from './GettingStarted/GettingStarted';
import Portfolio from './Portfolio/Portfolio';
import AboutUs from './AboutUs/AboutUs';
import NavigationBar from './MobileNavigation/NavigationBar';

import { useColorModeValue } from '@chakra-ui/react';

const Main = () => {
  const [page, setPage] = useState('home');
  const [width, setWidth] = useState(window.innerWidth);
  const [menuColumnWidth, setMenuColumnWidth] = useState(4);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);


  const changePage = (newPage) => {
    if (newPage === 'home') {
      console.log(newPage);
      setMenuColumnWidth(4);
    } else {
      setMenuColumnWidth(3);
    }
    setPage(newPage);
  };

  const transparentBG = useColorModeValue(
    'rgba(255,255,255,0.8)',
    'rgba(0,0,0,0.2)'
  );



  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          zIndex: '0',
          position: 'fixed',
        }}
      >
        <CanvasMenu />
      </div>
      
      <section className='menu'>
        <Grid templateColumns='repeat(10, 1fr)'>

          {/* This is for mobile  */}
          {page === 'home' && 
            <GridItem
              colSpan={{ base: 5, md: menuColumnWidth, lg: menuColumnWidth }}
              h={{ base: '85vh' }}
              w={{base: '100vw', md:'100%', lg:'100%'}}
              className='mobile-content'
            >
              <Center>
                <Box
                  bg='rgba(0,0,0,0.9)'
                  w={{ base: '70%', md: '70%', lg: '70%' }}
                  p={4}
                  color='white'
                >
                  <Menu style={{ zIndex: '1' }} changePage={changePage} />
                </Box>
              </Center>
            </GridItem>
          }
         
          {page !== 'home' && 
            <>
            <nav className='mobile-content'>
              <NavigationBar changePage={changePage}/>
            </nav>
             {page === 'getting-started' &&
              <GridItem
                colSpan={{
                  base: 5,
                  md: 10 - menuColumnWidth,
                  lg: 10 - menuColumnWidth,
                }}
                w={{base: '100vw', md:'100%', lg:'100%'}}
                className='mobile-content'
                pb='20'
              >
                <Box bg={transparentBG} mr={{ base: '0', md: '10', lg: '10' }}>
                  <GettingStarted />
                </Box>
              </GridItem>
            }
            {page === 'portfolio' && 
              <GridItem
                colSpan={{
                  base: 5,
                  md: 10 - menuColumnWidth,
                  lg: 10 - menuColumnWidth,
                }}
                w={{base: '100vw', md:'100%', lg:'100%'}}
                className='mobile-content'
                pb='20'
              >
                <Box bg={transparentBG} mr={{ base: '0', md: '10', lg: '10' }}>
                <Portfolio />
                </Box>
              </GridItem>
            }
            {page === 'about-us' && 
              <GridItem
                colSpan={{
                  base: 5,
                  md: 10 - menuColumnWidth,
                  lg: 10 - menuColumnWidth,
                }}
                w={{base: '100vw', md:'100%', lg:'100%'}}
                className='mobile-content'
                pb='20'
              >
                <Box bg={transparentBG} mr={{ base: '0', md: '10', lg: '10' }}>
                  <AboutUs />
                </Box>
              </GridItem>
            }
            </>
          }

          {/* This is for desktop */}
          <GridItem
            colSpan={{ base: 5, md: menuColumnWidth, lg: menuColumnWidth }}
            h={{ base: '85vh' }}
            w={{base: '100vw', md:'100%', lg:'100%'}}
            className='desktop-content'
          >
            <Center>
              <Box
                bg='rgba(0,0,0,0.9)'
                w={{ base: '70%', md: '70%', lg: '70%' }}
                p={4}
                color='white'
              >
                <Menu style={{ zIndex: '1' }} changePage={changePage} />
              </Box>
            </Center>
          </GridItem>
          
          {page !== 'home' && 
            <GridItem
              colSpan={{
                base: 5,
                md: 10 - menuColumnWidth,
                lg: 10 - menuColumnWidth,
              }}
              w={{base: '100vw', md:'100%', lg:'100%'}}
              className='desktop-content'
            >
              <Box bg={transparentBG} mr={{ base: '0', md: '10', lg: '10' }}>
                {page === 'getting-started' && <GettingStarted />}
                {page === 'portfolio' && <Portfolio />}
                {page === 'about-us' && <AboutUs />}
              </Box>
            </GridItem>
          }

         
        </Grid>
      </section>
    </>
  );
};

export default Main;
