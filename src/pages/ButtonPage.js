import Button from '../components/Button';
import { DiAndroid } from 'react-icons/di';
import { FaAmazonPay,FaAngular } from 'react-icons/fa';
function ButtonPage(){
    const handleClick = ()=>{
        
    };
    return <div>
        <div><Button success rounded outline onClick={handleClick}><DiAndroid /> click me</Button></div>
        <div><Button warning outline ><FaAmazonPay/>Buy Now!</Button></div>
        <div><Button danger outline ><FaAngular />See Deal</Button></div>
        <div><Button secondary outline rounded >Hide Ads</Button></div>
        <div><Button primary rounded outline>something primary</Button></div>
    </div>;
}

export default ButtonPage;