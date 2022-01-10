import Menu from './Menu';
import CanvasMenu from '../js/CanvasMenu';

const Main = () => {
  return (
    <>
      <div style={{ width: '100%', height: '100%', zIndex: '0' }}>
        <CanvasMenu />
      </div>
      <Menu style={{ zIndex: '1' }} />
    </>
  );
};

export default Main;
