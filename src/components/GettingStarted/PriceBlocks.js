import PriceBlock from './PriceBlock';
import { Grid, Box } from '@chakra-ui/react';

const PriceBlocks = () => {
  const basicSite = {
    title: 'BASIC',
    point1: 'Simple Website',
    point2: 'Fast Loading',
    point3: "Doesn't change often",
    point4: '5 Pages',
    point5: 'Good for Portfolios or Information Sites',
  };
  const professionalSite = {
    title: 'PROFESSIONAL',
    point1: 'Professional, Fancy & Custom Built For You',
    point2: 'Fast Loading',
    point3: 'Add & Change Features',
    point4: '5-10 Pages',
    point5: 'Good for Blogging & Displaying Products',
  };
  const ecommerceSite = {
    title: 'E-COMMERCE',
    point1: 'Online Store',
    point2: 'Add & Change Features',
    point3: '5-10 Pages',
    point4: 'A monthly e-commerce fee',
    point5: 'Good for Selling Products Online',
  };
  return (
    <div>
      <Grid templateColumns='repeat(3, 1fr)' gap={1}>
        <Box mt={8}>
          <PriceBlock type={basicSite} />
        </Box>
        <Box>
          <PriceBlock type={professionalSite} />
        </Box>
        <Box mt={8}>
          <PriceBlock type={ecommerceSite} />
        </Box>
      </Grid>
    </div>
  );
};

export default PriceBlocks;
