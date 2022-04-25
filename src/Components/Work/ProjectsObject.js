import { ReactComponent as Csharp } from "../Project/Language Icons/C#.svg";
import { ReactComponent as Python } from "../Project/Language Icons/Python.svg";
import { ReactComponent as Rct } from "../Project/Language Icons/React.svg";
//import { ReactComponent as Js } from "../Project/Language Icons/Javascript.svg";
//import { ReactComponent as Cpp } from "../Project/Language Icons/C++.svg";

const ProjectsArray = [
    { title: "Lights Packet Action", url: "https://github.com/TorrinBates/LightsPacketAction", justify: true, align: true, language: <Csharp/>,
        desc: "sdasdsadsadsadjkasdjsfhdskjfhdsfjkdsfhldsfhdsfljkdsfdsf",
        images: { base: "https://raw.githubusercontent.com/TorrinBates/LightsPacketAction/master/Images/", sub: ["Window.png", "Fullscreen.png", "FullscreenToggle.png", "FullscreenMenu.png", "ConfigEditor.png", "ConfigEditorButton.png"] }    
    },  
    { title: "Face Matcher", url: "https://github.com/TorrinBates/FaceMatcher", justify: false, align: true, language: <Python/>,
        desc: "sdasdsadsadsadjkasdjsfhdskjfhdsfjkdsfhldsfhdsfljkdsfdsf", 
        images: { base: "https://raw.githubusercontent.com/TorrinBates/LightsPacketAction/master/Images/", sub: ["FullscreenMenu.png"] }
    }, 
    { title: "Pencil Coding Challenge", url: "https://github.com/TorrinBates/PencilProgrammingChallenge", justify: true, align: false, language: <Csharp/>,
        desc: "sdasdsadsadsadjkasdjsfhdskjfhdsfjkdsfhldsfhdsfljkdsfdsf",
        images: { base: "https://raw.githubusercontent.com/TorrinBates/LightsPacketAction/master/Images/", sub: ["FullscreenMenu.png"] }
    },
    { title: "Ford AR Web App", url: "https://github.com/TorrinBates/fordwebapp", justify: false, align: false, language: <Rct/>,
        desc: "sdasdsadsadsadjkasdjsfhdskjfhdsfjkdsfhldsfhdsfljkdsfdsf",
        images: { base: "https://raw.githubusercontent.com/TorrinBates/fordwebapp/master/Images/", sub: ["FordWebApp.png", "CarMedia.png", "AddCar.png"] }
    }
];

export default ProjectsArray;