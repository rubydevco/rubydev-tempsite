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
      caption: 'A photo gallery of travelling through Vietnam',
    },
    {
      img: merci,
      link: 'https://www.mercicanada.org/',
      caption: 'idk what this site does',
    },
    {
      img: thatmakergirl,
      link: 'https://www.thatmakergirl.ca/',
      caption: 'Storefront bringing local handmade art ideas to life',
    },
    {
      img: designleague,
      link: 'https://www.uottawadesignleague.ca/',
      caption: 'An event for a 3-day University of Ottawa student event',
    },
    {
      img: cvuo,
      link: 'https://cvuo.ca/',
      caption: 'The massive clubs portal for the University of Ottawa',
    },
    {
      img: mess,
      link: 'https://mess-segm.ca/',
      caption: 'The hub for the Mechanical Engineering Student Society',
    },
    {
      img: mpsp,
      link: 'https://uottawampsp.com/',
      caption:
        'A site for students aspiring for the opportunity to participate as members of Parliament at the House of Commons',
    },
    {
      img: ruby,
      link: 'https://uottawampsp.com/',
      caption: 'A software development company',
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
            <Link
              href={image.link}
              isExternal
              style={{ textDecoration: 'none' }}
            >
              {' '}
              <Image loading='lazy' src={image.img} />
              <p className='portfolio-image-caption'>{image.caption}</p>
            </Link>
          ))}
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default Portfolio;
