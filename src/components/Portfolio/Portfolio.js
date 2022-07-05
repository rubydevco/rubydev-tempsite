import cvuo from '../../images/recent-portals/cvuo_material_dp.png';
import csu from '../../images/recent-portals/CSU_Logo.svg';
import { Box } from '@chakra-ui/react';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <Box mx={8}>
        <h2>Our Recent Work</h2>
        <div className='recent-portal-container'>
          <div className='recent-portal'>
            <img src={cvuo} alt='CVUO logo'></img>
            <h4>Campus Vibez uOttawa</h4>
            <p>We built the University of Ottawa's club portal back when we students there. We were volunteering members of Campus Vibez uOttawa (CVUO) decided to create a clubs portal because uOttawa was severely lacking one. It was a lot of work but has completely changed and shaped CVUO as it is today.</p>
          </div>
          <div className='recent-portal'>
            <img src={csu} alt='CSU logo'></img>
            <h4>Concordia Student Union</h4>
            <p>We were contracted by Concordia Student Union to create a clubs portal for them. Creating this portal was another great learning experience of creating a very slick and efficient portal for sharing files between clubs and the student union.</p>
          </div>
         </div>
      </Box>
    </div>
  );
};

export default Portfolio;
