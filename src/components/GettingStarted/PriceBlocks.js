import PriceBlock from './PriceBlock';
import { Center, Grid, GridItem, Box } from '@chakra-ui/react';

const PriceBlocks = () => {
  const basicSite = {
    title: 'Basic Site',
  };
  const professionalSite = {
    title: 'Profesional Site',
  };
  const ecommerceSite = {
    title: 'E-Commerce Site',
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
