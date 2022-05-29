//import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Projects() {


  return (

    <Container fluid className='bg-dark'>
        <Row className="justify-content-center p-3">
            <Col>
            <Image src="WorkingMomAssistant.JPG"  className='w-100' ></Image>
            </Col>
            <Col>
            <h1 className='text-center' >Working Mom Assistant</h1>

            <div className='text-white w-100 h4 mb-4 lh-lg'> 
            The working mom assistant is a web application developed to help working moms achieve work life balance and 
            reach their maximum potential in life. I provides features to organize tasks and measure effort spent on 
            different categories.
            </div>
            <p>
            <a href='https://working-mom-assistant.herokuapp.com/' target="_blank" className='h3 link-warning text-decoration-none m-4 text-center'>Check out the live site!</a>
            </p>
            <a href='https://github.com/MonaMahmoud/WorkingMomAssistant' target="_blank" className='h3 link-warning text-decoration-none m-4 text-center'>Visit the code repository</a>
            </Col>
        </Row>

        <Row className="justify-content-center p-3">
            <Col>
            <Image src="ReVamp.png"  className='w-100' ></Image>
            </Col>
            <Col>
            <h1 className='text-center' >ReVamp</h1>


            <div className='text-white w-100 h4 mb-4 lh-lg'> 

            REvamp is a web application designed to help empower people to repair, restore and improve the items 
            in our lives that society has told us have become disposable.
            Our users can see DIY projects by category that give them inspiration for their own life 
            as well as contributing DIY instructions.

            </div>
            <p>
            <a href='https://revampyourlife.herokuapp.com/' target="_blank" className='h3 link-warning text-decoration-none m-4 text-center'>Check out the live site!</a>
            </p>
            <a href='https://github.com/MonaMahmoud/Revamp' target="_blank" className='h3 link-warning text-decoration-none m-4 text-center'>Visit the code repository</a>
            </Col>

        </Row>
        
        <Row className="justify-content-center p-3">
            <Col>
            <Image src="DateNight.png"  className='w-100' ></Image>
            </Col>
            <Col>
            <h1 className='text-center lh-lg' >Date Night</h1>
            <div className='text-white w-100 h4 mb-4 '> 
            Date Night is an app that helps a nervous person to schedule his date and get a direction,
            knows the weather on that date, clothes, drinks, joke and quote suggestions.
            </div>
            <p>
            <a href='https://monamahmoud.github.io/DateNight/' target="_blank" className='h3 link-warning text-decoration-none m-4 text-center'>Check out the live site!</a>
            </p>
            <a href='https://github.com/MonaMahmoud/DateNight' target="_blank" className='h3 link-warning text-decoration-none m-4 text-center'>Visit the code repository</a>
            </Col>
        </Row>
        
        <Row className="justify-content-center p-3 lh-lg">
            <Col>
            <h1 className='text-center' >Weather Dashboard</h1>

            <Image src="WeatherDashboard.png"  className='w-100' ></Image>
            </Col>
            <Col>
            <div className='text-white w-100 h4 mb-4 lh-lg'> 
            Weather Dashboard is a web application that
            provides weather search utility that displays weather data information of the required city 
            
            for current and 5 days forecast. Previously searched cities are stored and displayed for quick access. 
            Weather icons are displayed based on the returned weather condition. UV index is displayed with color 
            corresponding to its severity level.
            </div>
            <p>
            <a href='https://monamahmoud.github.io/WeatherDashboard/' target="_blank" className='h3 link-warning text-decoration-none m-4 text-center'>Check out the live site!</a>
            </p>
            <a href='https://github.com/MonaMahmoud/WeatherDashboard' target="_blank" className='h3 link-warning text-decoration-none m-4 text-center'>Visit the code repository</a>
            </Col>
        </Row>
        
        <Row className="justify-content-center p-3">
            <Col>
            <Image src="JSQuiz.png"  className='w-100' ></Image>
            </Col>
            <Col>
            <h1 className='text-center' >Javascript Quiz</h1>

            <div className='text-white w-100 h4 mb-4 lh-lg'> 
            This is a javascript quiz to help better understand javascript concepts and syntax. 
            The quiz is timed and provides the option to store score at the end as well as displaying previously stored scores.
            </div>
            <p>
            <a href='https://monamahmoud.github.io/JavascriptQuiz/' target="_blank" className='h3 link-warning text-decoration-none m-4 text-center'>Check out the live site!</a>
            </p>
            <a href='https://github.com/MonaMahmoud/JavascriptQuiz' target="_blank" className='h3 link-warning text-decoration-none m-4 text-center'>Visit the code repository</a>
            </Col>
        </Row>
        
        <Row className="justify-content-center p-3">
            <Col>
            <Image src="PWATextEditor.png"  className='w-100' ></Image>
            </Col>
            <Col>
            <h1 className='text-center' >PWA Text Editor</h1>

            <div className='text-white w-100 h4 mb-4 lh-lg'> 
            The application is a Node.js and express application that allows the user to add and delete notes. 
            Express.js is used for back end, while notes' data is saved and retreived from a JSON file.
            </div>
            <p>
            <a href='https://text-editor-pwa0.herokuapp.com/' target="_blank" className='h3 link-warning text-decoration-none m-4 text-center'>Check out the live site!</a>
            </p>
            <a href='https://github.com/MonaMahmoud/PWA_Text_Editor' target="_blank" className='h3 link-warning text-decoration-none m-4 text-center'>Visit the code repository</a>
            </Col>
        </Row>
    </Container>
    
  );
}

export default Projects;
