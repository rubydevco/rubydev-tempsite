import { Center, Grid, GridItem, Box } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import MenuLink from './MenuLink';

const Menu = () => {
  return (
    <section className='menu'>
      <Grid templateColumns='repeat(10, 1fr)' gap={1}>
        <GridItem colSpan={{ base: 10, md: 4, lg: 4 }}>
          <Center m={4}>
            <Box bg='black' w='70%' p={4} color='white'>
              <Link
                as={RouterLink}
                to='/getting-started'
                style={{ textDecoration: 'none' }}
              >
                <MenuLink text='Get Started' />
              </Link>
              <Link
                as={RouterLink}
                to='/portfolio'
                style={{ textDecoration: 'none' }}
              >
                <MenuLink text='Portfolio' />
              </Link>
              <Link
                as={RouterLink}
                to='/about-us'
                style={{ textDecoration: 'none' }}
              >
                <MenuLink text='About Us' />
              </Link>
              <MenuLink text='Dark Mode' />
            </Box>
          </Center>
        </GridItem>
      </Grid>
    </section>
  );
};

export default Menu;
