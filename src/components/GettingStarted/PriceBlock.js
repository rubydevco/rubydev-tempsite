import { Box } from '@chakra-ui/react';
const PriceBlock = ({ type }) => {
  return (
    <div>
      <Box bg='black' w='100%' p={4} className='price-block'>
        <div className='price-block-title'>{type.title}</div>
      </Box>
      <Box bg='gray.100' color='black'>
        <div className='price-block-text'>
          <p className='price-block-point'>{type.point1}</p>
          <hr style={{ background: 'black' }} />
          <p className='price-block-point'>{type.point2}</p>
          <hr style={{ background: 'black' }} />
          <p className='price-block-point'>{type.point3}</p>
          <hr style={{ background: 'black' }} />
          <p className='price-block-point'>{type.point4}</p>
          <hr style={{ background: 'black' }} />
          <p className='price-block-point'>{type.point5}</p>
          <hr style={{ background: 'black' }} />
        </div>
      </Box>
    </div>
  );
};

export default PriceBlock;
