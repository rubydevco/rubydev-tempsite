import Menu from './Menu';
import CanvasMenu from '../js/CanvasMenu';
import { Grid, GridItem, Center, Box } from '@chakra-ui/react';

const Main = () => {
  return (
    <>
      <div style={{ width: '100%', height: '100%', zIndex: '0' }}>
        <CanvasMenu />
      </div>
      <section className='menu'>
        <Grid templateColumns='repeat(10, 1fr)' gap={1}>
          <GridItem colSpan={{ base: 10, md: 4, lg: 4 }}>
            <Center m={4}>
              <Box bg='black' w='70%' p={4} color='white'>
                <Menu style={{ zIndex: '1' }} />
              </Box>
            </Center>
          </GridItem>
        </Grid>
      </section>
    </>
  );
};

export default Main;
