import PriceBlock from './PriceBlock';
import { Grid, Box } from '@chakra-ui/react';

const PriceBlocks = () => {
  const basicSite = {
    title: 'BASIC',
    description:
      "Get a simple and elegant website for your organization to let visitors know what you're all about, for a price that you can afford.",
    point1: 'Simple Website',
    point1Description:
      'Simplicity is the ultimate sophistication. Get a no nonesense beautiful website to represent you and your business.',
    point2: 'Fast Loading',
    point2Description:
      'Any visitor to your site will be impressed on how fast each page loads.',
    point3: "Doesn't change often",
    point3Description:
      'To keep things simple, your site will not change in a regular basis, but stand the test of time in its original form.',
    point4: '5 Pages',
    point4Description: 'Get 5 beautifully designed pages for your business. ',
    point5: 'Good for Portfolios or Information Sites',
    point5Description:
      "Looking to setup a portfolio or just let visitors know what you're all about? This is the one for you.",
    price: '$300',
  };
  const professionalSite = {
    title: 'PROFESSIONAL',
    description:
      'Put your organization on the (internet) map with a professional site. Leave your visitors in awe everytime. And be able to update your site without writing code.',
    point1: 'Professional, Fancy & Custom Built For You',
    point1Description:
      "Get a slick website that's built from scratch to match you and your business perfectly.",
    point2: 'Fast Loading',
    point2Description:
      'Any visitor to your site will be impressed on how fast each page loads.',
    point3: 'Add & Change Features',
    point3Description:
      'Have the ability to edit aspects of your site yourself, without ever having to write a single line of code.',
    point4: '5-10 Pages',
    point4Description: 'Get up to 10 content filled pages, all custom made. ',
    point5: 'Good for Blogging & Displaying Products',
    point5Description:
      'Looking to start a blog or just showcase all your cool products? This is the one for you. ',
    price: '$500',
  };
  const ecommerceSite = {
    title: 'E-COMMERCE',
    description:
      "Looking to sell products or services on a site as beautiful as you? We've got you covered." +
      " We'll make sure to handle everything, so you can focus on running your amazing business",
    point1: 'Online Store',
    point1Description: 'Setup an online store and sell products directly. ',
    point2: 'Add & Change Features',
    point2Description:
      'Be able to easily add and change your entire site without ever writing a single line of code.',
    point3: '5-10 Pages',
    point3Description: 'Get up to 10 content filled pages, all custom made.',
    point4: 'A monthly e-commerce fee',
    point4Description: 'Comes out to about $20-$30 a month.',
    point5: 'Good for Selling Products Online',
    point5Description:
      'Want to sell products online? This one is the one for you.',
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
