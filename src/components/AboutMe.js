//import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function AboutMe() {


  return (

    <Container fluid className='bg-dark height'>
        <Row className="justify-content-center">
            <Col>
            <Image src="MonaMahmoud.JPG" roundedCircle thumbnail className='mx-auto d-block w-50 bg-dark mt-5' ></Image>
            </Col>
            <Col>
            <div className='text-white w-100 h4 m-0 mt-3 mb-3 lh-lg'> I'm Mona Mahmoud. 
            A self-motivated, creative, and ambitious full stack web developer holding a Bachelor of Science in Computer Engineering along with experience in high-profile corporations. Recently earned a certificate in full stack web development from Sydney University, with newly developed skills in JavaScript, CSS, React.js, Python, and responsive web design. I am always eager to apply strong analytical skills into the process of building integrated systems to provide reliable web experience.
I am confident in applying software development lifecycle methodology including implementation, testing, troubleshooting, and merging business applications. I am also dedicated and detail oriented, with the ability to work either as a team member or individually. In addition, I have profound planning, organization, prioritization, and problem-solving skills. I always take an enthusiastic approach towards new challenges, and I’m interested in learning new technologies.

            </div>
            </Col>
        </Row>
        <Row>
            
        </Row>
    </Container>
    
  );
}

export default AboutMe;
