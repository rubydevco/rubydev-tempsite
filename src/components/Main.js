import { Grid, GridItem, Center, Box } from '@chakra-ui/react';

import Menu from './Menu';
import CanvasMenu from '../js/CanvasMenu';

import GettingStarted from './GettingStarted/GettingStarted';

const Main = () => {
  return (
    <>
      <div style={{ width: '100%', height: '100%', zIndex: '0' }}>
        <CanvasMenu />
      </div>
      <section className='menu'>
        <Grid templateColumns='repeat(10, 1fr)'>
          <GridItem colSpan={{ base: 10, md: 3, lg: 3 }}>
            <Center>
              <Box bg='black' w='70%' p={4} color='white'>
                <Menu style={{ zIndex: '1' }} />
              </Box>
            </Center>
          </GridItem>
          <GridItem colSpan={{ base: 10, md: 7, lg: 7 }}>
            <GettingStarted />
          </GridItem>
        </Grid>
      </section>
    </>
  );
};

export default Main;
