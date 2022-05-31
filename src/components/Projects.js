import Container from 'react-bootstrap/Container';
import Project from './Project';


function Projects() {


  return (

    <Container fluid className='bg-dark'>

        <Project 
            imgSrc= "WorkingMomAssistant.png" 
            title="Working Mom Assistant" 
            desc="The working mom assistant is a web application developed to help working moms achieve work life balance and 
            reach their maximum potential in life. I provides features to organize tasks and measure effort spent on 
            different categories." 
            liveLink="https://working-mom-assistant.herokuapp.com/" 
            repoLink="https://github.com/MonaMahmoud/WorkingMomAssistant"
        />

        <Project 
            imgSrc= "ReVamp.png" 
            title="ReVamp" 
            desc="REvamp is a web application designed to help empower people to repair, restore and improve the items 
            in our lives that society has told us have become disposable.
            Our users can see DIY projects by category that give them inspiration for their own life 
            as well as contributing DIY instructions." 
            liveLink="https://revampyourlife.herokuapp.com/" 
            repoLink="https://github.com/MonaMahmoud/Revamp"
        />

        <Project 
            imgSrc= "DateNight.png" 
            title="Date Night" 
            desc="Date Night is an app that helps a nervous person to schedule his date and get a direction,
            knows the weather on that date, clothes, drinks, joke and quote suggestions." 
            liveLink="https://monamahmoud.github.io/DateNight/" 
            repoLink="https://github.com/MonaMahmoud/DateNight"
        />
        
        <Project 
            imgSrc= "WeatherDashboard.png" 
            title="Weather Dashboard" 
            desc="Weather Dashboard is a web application that
            provides weather search utility that displays weather data information of the required city 
            
            for current and 5 days forecast. Previously searched cities are stored and displayed for quick access. 
            Weather icons are displayed based on the returned weather condition. UV index is displayed with color 
            corresponding to its severity level." 
            liveLink="https://monamahmoud.github.io/WeatherDashboard/" 
            repoLink="https://github.com/MonaMahmoud/WeatherDashboard"
        />
        
        <Project 
            imgSrc= "JSQuiz.png" 
            title="Javascript Quiz" 
            desc="This is a javascript quiz to help better understand javascript concepts and syntax. 
            The quiz is timed and provides the option to store score at the end as well as displaying previously stored scores." 
            liveLink="https://monamahmoud.github.io/JavascriptQuiz/" 
            repoLink="https://github.com/MonaMahmoud/JavascriptQuiz"
        />
        
        <Project 
            imgSrc= "PWATextEditor.png" 
            title="PWA Text Editor" 
            desc="The application is a Node.js and express application that allows the user to add and delete notes. 
            Express.js is used for back end, while notes' data is saved and retreived from a JSON file." 
            liveLink="https://text-editor-pwa0.herokuapp.com/" 
            repoLink="https://github.com/MonaMahmoud/PWA_Text_Editor"
        />

    </Container>
    
  );
}

export default Projects;
