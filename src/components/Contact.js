import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ContactForm from './ContactForm';

function Contact() {


  return (

    <Container fluid className='bg-teal'>
        <Row className="justify-content-center bg-dark">
            
            <Col>
            <div className='text-white w-100 h1 mt-5 mb-5 text-center bg-dark lh-lg'>  
           Feel free to contact me through any of the following channels!
            </div>
            </Col>
        </Row>

        <Row>
            
            <Col>
            <Image src="{process.env.PUBLIC_URL + LinkedIn.png"  className=' logo m-5' ></Image>

            <a href='https://www.linkedin.com/in/monamahmoud/' target="_blank" className='h2 link-warning text-decoration-none'>https://www.linkedin.com/in/monamahmoud/</a>
            </Col>
        </Row>
        <Row>
            
            <Col>
            <Image src="{process.env.PUBLIC_URL + github.png"  className=' logo m-5' ></Image>

            <a href='https://github.com/MonaMahmoud' target="_blank" className='h2 link-warning text-decoration-none'>https://github.com/MonaMahmoud</a>
            </Col>
        </Row>
        <Row>
            
            <Col>
            <Image src="{process.env.PUBLIC_URL + email.png"  className=' logo m-5' ></Image>

            <a href='mailto:monamohamedfahmy@gmail.com' target="_blank" className='h2 link-warning text-decoration-none'>monamohamedfahmy@gmail.com</a>
            </Col>
        </Row>
        <Row>
        <ContactForm/>

        </Row>
    </Container>
    

  );
}

export default Contact;
