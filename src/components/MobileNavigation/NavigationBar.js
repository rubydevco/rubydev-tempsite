import { Center, SimpleGrid, Link, useColorMode } from '@chakra-ui/react'
import { FaDollarSign, FaPalette, FaUser, FaMoon, FaSun } from 'react-icons/fa';
import logo from '../../images/OnyxOnline_Icon+white.png';

const NavigationBar = ({ changePage }) => {

    const { colorMode, toggleColorMode } = useColorMode();
    
    return (
        <div className="app-bar">
        <SimpleGrid columns={5}>
            <Center style={{display:'inline'}}>
                <Link 
                    style={{ textDecoration: 'none' }}
                    onClick={() => {
                        changePage('getting-started');
                        window.scrollTo(0, 0)
                    }}
                >
                    <Center>
                        <div className="app-bar-icon">
                            <FaDollarSign />
                        </div>
                    </Center>
                    <Center className="app-bar-text">
                        <p>Pricing</p>
                    </Center>
                </Link>
            </Center>
            <Center style={{display:'inline'}}>
                <Link
                    style={{ textDecoration: 'none' }}
                    onClick={() => {
                        changePage('portfolio');
                        window.scrollTo(0, 0)
                    }}
                >
                    <Center>
                        <div className="app-bar-icon">
                            <FaPalette />
                        </div>
                    </Center>
                    <Center className="app-bar-text">
                        <p>Portfolio</p>
                    </Center>
                </Link>
            </Center>
            <Center style={{display:'inline'}}>
                <Link
                    style={{ textDecoration: 'none' }}
                    onClick={() => {
                        changePage('home');
                        window.scrollTo(0, 0)
                    }}
                >
                    <Center>
                        <div className="app-bar-logo">
                            <img src={logo} alt="ONYX Online Logo" />
                        </div>
                    </Center>
                </Link>
            </Center>
            <Center style={{display:'inline'}}>
                <Link
                    style={{ textDecoration: 'none' }}
                    onClick={() => {
                        changePage('about-us');
                        window.scrollTo(0, 0)
                    }}
                >
                    <Center>
                        <div className="app-bar-icon">
                            <FaUser />
                        </div>
                    </Center>
                    <Center className="app-bar-text">
                        <p>About Us</p>
                    </Center>
                </Link>
            </Center>
            <Center style={{display:'inline'}}>
                <Link onClick={toggleColorMode} style={{ textDecoration: 'none' }}>
                    <Center>
                        <div className="app-bar-icon">
                            {colorMode === 'dark' ? <FaSun /> : <FaMoon />}
                        </div>
                    </Center>
                    <Center className="app-bar-text">
                        <p>Mode</p>
                    </Center>
                </Link>
            </Center>
        </SimpleGrid>
        </div>
    );
};

export default NavigationBar;
