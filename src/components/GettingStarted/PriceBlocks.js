import PriceBlock from './PriceBlock';
import { Center, Grid, GridItem, Box } from '@chakra-ui/react';

const PriceBlocks = () => {
  return (
    <div>
      <Grid templateColumns='repeat(10, 1fr)' gap={1}>
        <GridItem>
          <PriceBlock />
        </GridItem>
        <PriceBlock />
        <PriceBlock />
      </Grid>
    </div>
  );
};

export default PriceBlocks;
