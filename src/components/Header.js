import AboutMe from './AboutMe';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import { Tabs, Tab } from 'react-bootstrap';

const Header = ()=>{
    return (

        <Tabs fluid fill justify defaultActiveKey="home"  className="mb-3 text-dark w-auto h-100">
            <Tab eventKey="home" title="Who am I?" className='text-danger'>
                <AboutMe />
            </Tab>
            <Tab eventKey="projects" title="Portfolio">
                <Projects />
            </Tab>
            <Tab eventKey="profile" title="Resume">
                <Resume />
            </Tab>
            <Tab eventKey="contact" title="Contact" >
                <Contact />
            </Tab>
        </Tabs>

    );
}

export default Header;

