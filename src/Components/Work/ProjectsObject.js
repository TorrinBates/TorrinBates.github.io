import { ReactComponent as Csharp } from "../Project/Language Icons/C#.svg";
import { ReactComponent as Python } from "../Project/Language Icons/Python.svg";
import { ReactComponent as Rct } from "../Project/Language Icons/React.svg";
//import { ReactComponent as Js } from "../Project/Language Icons/Javascript.svg";
//import { ReactComponent as Cpp } from "../Project/Language Icons/C++.svg";

const ProjectsArray = [
    { 
        title: "Lights Packet Action", url: "https://github.com/TorrinBates/LightsPacketAction", justify: true, align: true, language: <Csharp/>,
        desc: "A desktop application that allows you to customize and send messages to an endpoint in the network.  This app leverages C# + WPF and was developed for my friend to use at tech shows like CES so he could send customizable messages to a media server to queue content to be displayed on the booths large screen.",
        images: { base: "https://raw.githubusercontent.com/TorrinBates/LightsPacketAction/master/Images/", sub: ["Window.png", "Fullscreen.png", "FullscreenToggle.png", "FullscreenMenu.png", "ConfigEditor.png", "ConfigEditorButton.png"] }    
    },  
    { 
        title: "Face Matcher", url: "https://github.com/TorrinBates/FaceMatcher", justify: false, align: true, language: <Python/>,
        desc: "This facial recognition python project compares and contrasts the effectivenes of using different amounts of eigenfaces to determine if a face is a match(genuine vs imposter).  Five different Face pictures of ten unique people were used to find a mean face and the respective eigenfaces.  Then compute distance for each of the genuine and imposter faces and graph the results and the false reject and accept rates.", 
        images: { base: "https://raw.githubusercontent.com/TorrinBates/FaceMatcher/master/", sub: ["Faces.PNG", "50EigHist.png", "10EigHist.png"] }
    }, 
    { 
        title: "Pencil Coding Challenge", url: "https://github.com/TorrinBates/PencilProgrammingChallenge", justify: true, align: false, language: <Csharp/>,
        desc: "A C# library that implements and mimics the behavior of pencil and paper including the ability to erase.  The purpose of this library was to practice the coding principles SOLID, DRY, YAGNI and Test Driven Development(TDD).  Additionally, I used docker for the first time on this project, making building and running tests infinitely easier.",
        images: { base: "https://raw.githubusercontent.com/TorrinBates/PencilProgrammingChallenge/master/Images/", sub: ["IDE.png"] }
    },
    { 
        title: "Ford ", url: "https://github.com/TorrinBates/fordwebapp", justify: false, align: false, language: <Rct/>,
        desc: "A web app that was built using JavaScript, ReactJS, and Amazon Web Services(AWS).  This project was built as an internal data entry tool to support an Augmented Reality(AR) owners manual iPhone app.  Leveraging this web app, non-technical staff could easily add and modify vehicles and their respective information via API for the iPhone app to pull in.",
        images: { base: "https://raw.githubusercontent.com/TorrinBates/fordwebapp/master/Images/", sub: ["Dashboard.PNG", "AddMedia.PNG", "AddVehicle.PNG"] }
    }
];

export default ProjectsArray;