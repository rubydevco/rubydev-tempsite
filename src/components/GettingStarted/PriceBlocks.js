import PriceBlock from './PriceBlock';
import { Grid, Box } from '@chakra-ui/react';

const PriceBlocks = () => {
  const basicSite = {
    title: 'BASIC',
    description:
      "Get a simple and elegant website for your organization to let visitors know what you're all about for a price that you can afford.",
    point1: 'Simple Website',
    point2: 'Fast Loading',
    point3: "Doesn't change often",
    point4: '5 Pages',
    point5: 'Good for Portfolios or Information Sites',
    price: '$300',
  };
  const professionalSite = {
    title: 'PROFESSIONAL',
    description:
      'Put your organization on the (internet) map with a professional site. Leave your visitors in awe everytime. And be able to update your site without writing code.',
    point1: 'Professional, Fancy & Custom Built For You',
    point2: 'Fast Loading',
    point3: 'Add & Change Features',
    point4: '5-10 Pages',
    point5: 'Good for Blogging & Displaying Products',
    price: '$500',
  };
  const ecommerceSite = {
    title: 'E-COMMERCE',
    description:
      "Looking to sell products or services on a site as beautiful as you? We've got you covered." +
      " We'll make sure to handle everything, so you can focus on running your amazing business",
    point1: 'Online Store',
    point2: 'Add & Change Features',
    point3: '5-10 Pages',
    point4: 'A monthly e-commerce fee',
    point5: 'Good for Selling Products Online',
    price: '$500',
  };
  return (
    <div>
      <Grid templateColumns='repeat(3, 1fr)' gap={2}>
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
