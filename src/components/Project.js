import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Project(props) {


  return (

    <Row className="justify-content-center p-3">
            <Col>
            <Image src={props.imgSrc}  className='w-100' ></Image>
            </Col>
            <Col>
            <h1 className='text-center' >{props.title}</h1>

            <div className='text-white w-100 h4 mb-4 lh-lg'> 
            {props.desc}
            </div>
            <p>
            <a href={props.liveLink} target="_blank" className='h3 link-warning text-decoration-none m-4 text-center'>Check out the live site!</a>
            </p>
            <a href={props.repoLink} target="_blank" className='h3 link-warning text-decoration-none m-4 text-center'>Visit the code repository</a>
            </Col>
        </Row>
    
  );
}

export default Project;
