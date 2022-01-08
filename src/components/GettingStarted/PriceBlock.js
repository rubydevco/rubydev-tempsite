import { Box } from '@chakra-ui/react';
const PriceBlock = ({ type }) => {
  return (
    <div>
      <Box bg='black' w='100%' p={4}>
        <div className='price-block-title'>{type.title}</div>
      </Box>
      <Box bg='gray.100' color='black' p={4}>
        <div className='price-block-text'>
          <p>{type.title}</p>
          <p>What</p>
          <p>What</p>
          <p>What</p>
          <p>What</p>
          <p>What</p>
        </div>
      </Box>
    </div>
  );
};

export default PriceBlock;
