import { useState } from 'react';
import { Image, CircularProgress } from '@chakra-ui/react';

const Sites = ({ site }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div>
      {loaded ? null : (
        <CircularProgress
          className='portfolio-loading'
          isIndeterminate
          color='blue.100'
        />
      )}
      <Image
        src={site.img}
        onLoad={() => {
          setLoaded(true);
          console.log(loaded);
        }}
        style={loaded ? {} : { display: 'none' }}
      ></Image>
    </div>
  );
};

export default Sites;
