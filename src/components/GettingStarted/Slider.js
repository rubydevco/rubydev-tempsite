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

const Slider = ({ isOpen, onClose, btnRef }) => {
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
          <DrawerHeader>Basic Website</DrawerHeader>

          <DrawerBody>
            <h2
              style={{
                textAlign: 'justify',
                wordBreak: 'break-all',
                wordWrap: 'break-word',
                hyphens: 'auto',
              }}
            >
              Lorem ipsum dolor, <b>sit </b> amet consectetur adipisicing elit.
              Doloremque ducimus sed debitis et deserunt nulla nemo quod rem
              cupiditate provident at, quisquam in necessitatibus. Omnis veniam
              numquam vero. Sequi, possimus?
            </h2>
            <Text my={4}>Your Name</Text>
            <Input placeholder='Type here...' />
            <Text my={4}>Your Email</Text>
            <Input placeholder='Type here...' />
            <Select my={4}>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
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
