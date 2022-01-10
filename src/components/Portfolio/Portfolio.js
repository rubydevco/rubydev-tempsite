import { SimpleGrid, Image, Link, Box } from '@chakra-ui/react';
import merci from '../../images/portfolio/merci.jpg';
import thirtyfivemm from '../../images/portfolio/35mm.jpg';
import cvuo from '../../images/portfolio/cvuo.jpg';
import designleague from '../../images/portfolio/designleague.jpg';
import mess from '../../images/portfolio/mess.jpg';
import mpsp from '../../images/portfolio/mpsp.jpg';
import ruby from '../../images/portfolio/ruby.jpg';
import thatmakergirl from '../../images/portfolio/thatmakergirl.jpg';

const Portfolio = () => {
  var images = [
    {
      img: thirtyfivemm,
      link: 'https://www.35mm.website/',
    },
    {
      img: merci,
      link: 'https://www.mercicanada.org/',
    },
    {
      img: thatmakergirl,
      link: 'https://www.thatmakergirl.ca/',
    },
    {
      img: designleague,
      link: 'https://www.uottawadesignleague.ca/',
    },
    {
      img: cvuo,
      link: 'https://cvuo.ca/',
    },
    {
      img: mess,
      link: 'https://mess-segm.ca/',
    },
    {
      img: mpsp,
      link: 'https://uottawampsp.com/',
    },
    {
      img: ruby,
      link: 'https://uottawampsp.com/',
    },
  ];
  return (
    <div className='portfolio'>
      <Box m={8}>
        <h2>Our Recent Work</h2>
        <SimpleGrid
          minChildWidth={{ base: '50vw', md: '35vw', lg: '35vw' }}
          spacing={2}
        >
          {images.map((image) => (
            <Link href={image.link} isExternal>
              {' '}
              <Image loading='lazy' src={image.img} />
            </Link>
          ))}
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default Portfolio;
