import { useState } from 'react';
import axios from 'axios';
import { SHEETS_KEY } from '../../secret';
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
  Select,
  FormControl,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';

const Slider = ({ isOpen, onClose, btnRef, type }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedType, setSelectedType] = useState(type.title);
  const [comments, setComments] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();

    const newSubmission = {
      name: name,
      email: email,
      selectedType: selectedType,
      comments: comments,
    };

    axios.post(SHEETS_KEY, newSubmission).then((response) => {
      console.log(response);
      onClose();
    });
  };
  return (
    <div className='slider'>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent className='slider-content'>
          <DrawerCloseButton />
          <DrawerHeader className='slider-title'>
            {type.title} SITE
          </DrawerHeader>

          <DrawerBody>
            <h2
              style={{
                textAlign: 'justify',
                wordWrap: 'break-word',
                hyphens: 'auto',
              }}
              className='slider-description'
            >
              {type.description}
            </h2>
            <br />
            <p>Fill out the form below to get in touch. </p>
            <form
              id='form'
              method='POST'
              onSubmit={onSubmit}
              className='slider-form'
            >
              <FormControl isRequired>
                <FormLabel my={4}>Your Name</FormLabel>
                <Input
                  placeholder='Type here...'
                  onChange={(e) => setName(e.target.value)}
                  id='name'
                  name='name'
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel my={4}>Your Email</FormLabel>
                <Input
                  placeholder='Type here...'
                  type='email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel my={4}>The Type of Website</FormLabel>
                <Select onChange={(e) => setSelectedType(e.target.value)}>
                  <option value={type.title}>{type.title}</option>
                  <option
                    value={
                      type.title === 'PROFESSIONAL' ? 'BASIC' : 'PROFESSIONAL'
                    }
                  >
                    {type.title === 'PROFESSIONAL' ? 'BASIC' : 'PROFESSIONAL'}
                  </option>
                  <option
                    value={type.title === 'E-COMMERCE' ? 'BASIC' : 'E-COMMERCE'}
                  >
                    {type.title === 'E-COMMERCE' ? 'BASIC' : 'E-COMMERCE'}
                  </option>
                  <option value='Not Sure'>Note Sure</option>
                </Select>
              </FormControl>
              <FormLabel my={4}>Other Comments</FormLabel>
              <Textarea
                placeholder='Type here..'
                onChange={(e) => setComments(e.target.value)}
              ></Textarea>
            </form>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button type='submit' form='form' colorScheme='blue'>
              Send
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Slider;
