import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  Text,
  Select,
} from '@chakra-ui/react';

const Slider = ({ isOpen, onClose, btnRef, type }) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{type.title} SITE</DrawerHeader>

          <DrawerBody>
            <h2
              style={{
                textAlign: 'justify',
                wordWrap: 'break-word',
                hyphens: 'auto',
              }}
            >
              {type.description}
            </h2>
            <Text my={4}>Your Name</Text>
            <Input placeholder='Type here...' />
            <Text my={4}>Your Email</Text>
            <Input placeholder='Type here...' />
            <Select my={4}>
              <option value={type.title}>{type.title}</option>
              <option
                value={type.title === 'PROFESSIONAL' ? 'BASIC' : 'PROFESSIONAL'}
              >
                {type.title === 'PROFESSIONAL' ? 'BASIC' : 'PROFESSIONAL'}
              </option>
              <option
                value={type.title === 'E-COMMERCE' ? 'BASIC' : 'E-COMMERCE'}
              >
                {type.title === 'E-COMMERCE' ? 'BASIC' : 'E-COMMERCE'}
              </option>
            </Select>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Slider;
