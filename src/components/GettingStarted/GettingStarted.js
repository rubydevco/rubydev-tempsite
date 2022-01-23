import PriceBlocks from './PriceBlocks';

const GettingStarted = () => {
  return (
    <>
      <div className='getting-started' id="getting-started" >
        <h2 className='prices-title'>
          Bringing forward a new era of affordable websites!
        </h2>
        <p className='prices-title-caption'>
          Get fast, stylish & professional work that won't hurt your wallet
        </p>
        <div className='price-blocks'>
          <PriceBlocks />
        </div>
      </div>
    </>
  );
};

export default GettingStarted;
