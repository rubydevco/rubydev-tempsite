import { useState, useEffect } from 'react';
import PriceBlock from './PriceBlock';
import { Grid, Box } from '@chakra-ui/react';

const PriceBlocks = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const basicSite = {
    title: 'BASIC',
    description:
      "Get a simple and elegant website for your organization to let visitors know what you're all about, for a price that you can afford.",
    point1: 'Simple Website',
    point1Description:
      'Simplicity is the ultimate sophistication. Get a no nonsense beautiful website to represent you or your business.',
    point2: 'Fast Loading',
    point2Description:
      'Any visitor to your site will be impressed on how fast each page loads.',
    point3: "Simple Edits",
    point3Description:
      'To keep things simple, your site will have limited ability to make changes, such as change text or create new blog posts.',
    point4: '5 Unique Pages',
    point4Description: 'Get 5 beautifully designed unique pages for your website. ',
    point5: 'Perfect for simple Portfolios or blogs',
    point5Description:
      "A no-frills get the job done website showcasing what you're all about.",
    price: '$300',
  };
  const professionalSite = {
    title: 'PROFESSIONAL',
    description:
      'Put your organization on the (internet) map with a professional site. Leave your visitors in awe every time. And be able to update your site without writing code.',
    point1: 'Professional, Fancy & Custom Built For You',
    point1Description:
      "Get a slick website using unique features that's built from scratch to match you and your business perfectly.",
    point2: 'Fast Loading',
    point2Description:
      'Any visitor to your site will be impressed on how fast each page loads.',
    point3: 'Add & Change Features',
    point3Description:
      'Have the ability to edit aspects of your site yourself, without ever having to write a single line of code.',
    point4: '5-10 Unique Pages',
    point4Description: 'Get up to 10 content filled pages, all custom made. ',
    point5: 'Great for Making an Impression',
    point5Description:
      'Carve a unique corner on the internet with your website that will wow your audience',
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
  if (width <= 768) {
    return (
      <>
        <Box className='price-block-mobile'>
          <PriceBlock type={basicSite} />
        </Box>
        <Box className='price-block-mobile'>
          <PriceBlock type={professionalSite} />
        </Box>
        <Box className='price-block-mobile'>
          <PriceBlock type={ecommerceSite} />
        </Box>
      </>
    );
  }
  return (
    <div>
      <Grid templateColumns={{base:'', md:'repeat(3, 1fr)', lg: 'repeat(3, 1fr)'}} gap={2}>
        <Box mt={{base:'',md: '8', lg:'8'}} className='price-block-mobile'>
          <PriceBlock type={basicSite} />
        </Box>
        <Box className='price-block-mobile'>
          <PriceBlock type={professionalSite} />
        </Box>
        <Box mt={{base:'',md: '8', lg:'8'}}className='price-block-mobile'>
          <PriceBlock type={ecommerceSite} />
        </Box>
      </Grid>
    </div>
  );
};

export default PriceBlocks;
