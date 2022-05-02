import { Image } from '@chakra-ui/react';

import evan from '../../images/about-us/evan.jpg';
import hassan from '../../images/about-us/hassan.jpg';

const AboutUs = () => {
  return (
    <div className='about'>
      <h2>About Us</h2>
      <h3>
        <b>ONYX Online</b> was founded by two uOttawa graduates in 2021 during
        the beginning of the pandemic.
      </h3>
      <div className='about-pic'>
        <Image src={hassan} alt='Hassan Profile' borderRadius='full'></Image>
        <h3>Hassan Ahmed</h3>
      </div>
      <div className='about-space'></div>
      <div className='about-pic'>
        <Image src={evan} alt='Evan Profile' borderRadius='full'></Image>
        <h3>Evan Chan</h3>
      </div>
      <div className='email'><a href='mailto:onyxonlineinfo@gmail.com'>onyxonlineinfo@gmail.com</a></div>
      <h3>ONYX Online follows a short simple list of rules to live by</h3>
      <div className='about-text'>
        <h4>1. Independence</h4>
        <p>
          The reason we started ONYX was because we wanted to be our own boss
          and independent. We carry this philosophy with our work helping others
          be independent with their own site.
        </p>
        <h4>2. Home Sweet Home</h4>
        <p>
          We are Ottawa-ians! We like to stay local and help other Ottawa
          businesses along with us.
        </p>
        <h4>3. Push the Boundaries</h4>
        <p>
          Every website we make we always try to try new techniques, styles, and
          innovations to create something new and unique.
        </p>
        <h4>4. No Bullshit!</h4>
        <p>
          Whether it's a website design or a work process, we like to keep
          things simple, minimal, clean, and no extra crap.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
