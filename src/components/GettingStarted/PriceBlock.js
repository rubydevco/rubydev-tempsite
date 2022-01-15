import { useState, useRef } from 'react';
import { Box, Button, Center, Link, useDisclosure } from '@chakra-ui/react';
import Slider from './Slider';
const PriceBlock = ({ type }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <div>
      <Link link={btnRef} onClick={onOpen} style={{ textDecoration: 'none' }}>
        <Box
          bg='black'
          w='100%'
          p={4}
          className='price-block-title-box'
          color='white'
        >
          <div className='price-block-title'>{type.title}</div>
        </Box>
      </Link>
      <Box bg='gray.200' color='black'>
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
      <Box
        bg='black'
        w='100%'
        p={4}
        className='price-block-price-box'
        color='white'
      >
        <div className='price-block-price'>
          <h2>{type.price}</h2>
        </div>
      </Box>
      <Box w='100%' pt={2} className='price-block-price-box'>
        <div className='price-block-contact'>
          <Center>
            <Button
              w='100%'
              size='lg'
              variant='solid'
              color='white'
              bgColor='black'
            >
              Get Started
            </Button>
          </Center>
        </div>
      </Box>
      <Slider isOpen={isOpen} onClose={onClose} btnR={btnRef} />
    </div>
  );
};

export default PriceBlock;
