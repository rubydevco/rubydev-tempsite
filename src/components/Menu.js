import { Center, Grid, GridItem, Box } from '@chakra-ui/react';
import MenuLink from './MenuLink';

const Menu = () => {
  return (
    <section className='menu'>
      <Grid templateColumns='repeat(10, 1fr)' gap={1}>
        <GridItem colSpan={{ base: 10, md: 4, lg: 4 }}>
          <Center m={4}>
            <Box bg='black' w='70%' p={4} color='white'>
              <MenuLink text='Get Started' />
              <MenuLink text='Portfolio' />
              <MenuLink text='About Us' />
              <MenuLink text='Dark Mode' />
            </Box>
          </Center>
        </GridItem>
      </Grid>
      {/* <Flex color='white'>
        <Center w='50vw'>
          <h2></h2>
        </Center>
      </Flex> */}
    </section>
  );
};

export default Menu;
