import Nav, { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import AboutMe from './AboutMe';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import { Tabs, Tab } from 'react-bootstrap';

const Footer = ()=>{
    return (

        <Container >
            <Row >
                <Col className='h3 text-secondary p-5 '>
                <p>Mona Mahmoud</p>
                <p>Full Stack Web Developer</p>
                </Col>
                <Col >
                <p>
                <a href='https://www.linkedin.com/in/monamahmoud/' target="_blank" className='h2 link-warning text-decoration-none'>
                    <Image src="LinkedIn.png"  className='logo m-5' ></Image>
                    </a>
                    <a href='https://github.com/MonaMahmoud' target="_blank" className='h2 link-warning text-decoration-none'>
                <Image src="github.png"  className=' logo m-5' ></Image>
                    </a>
                    <a href='mailto:monamohamedfahmy@gmail.com' target="_blank" className='h2 link-warning text-decoration-none'>
                <Image src="email.png"  className=' logo m-5' ></Image>
                    </a>


                </p>
                <p>
                
                </p>
                <p>
               
                </p>
                </Col>
            </Row>
        </Container>

    );
}

export default Footer;

