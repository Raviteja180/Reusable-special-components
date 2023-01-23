 import Button from "./components/Button";
 import { DiAndroid } from "react-icons/di";
 import { FaAmazonPay,FaAngular } from "react-icons/fa";
 import  Accordian from './components/Accordion'
function App(){
    const items = [
    {
        id:1,
        label : 'can i use React on a  project?',
        content : 'yes you can use'
    },
    {
        id:2,
        label : 'can i use Javascript on a  project?',
        content : 'yes you can use'
    },
    {   
        id:3,
        label : 'can i use CSS on a  project?',
        content : 'yes you can use'
    }]
   return <Accordian items={items}/>
}

export default App;