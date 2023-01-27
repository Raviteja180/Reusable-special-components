/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';


function Dropdown({options,value,onChange}){
    const [isOpen,setIsOpen] = useState(false); 
    const divEl = useRef()
    const handleClick = ()=>{
        setIsOpen(!isOpen);
    };
    useEffect(()=>{
        const handle= (event)=>{
            if(!divEl.current)return ;
            if(!divEl.current.contains(event.target)){
                setIsOpen(false)
            }
        }
        document.addEventListener('click',handle,true)

        return ()=>{
            //in this project this retuning function is not showing any impact
            document.removeEventListener('click',handle);
        }
    },[])
    const handleOptionClick=(option)=>{
        setIsOpen(!isOpen);
        // console.log(option)
        onChange(option);

    };
    const renderedOptions = options.map((option)=>{
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" key={option.value} 
            onClick={()=>handleOptionClick(option)}>
            {option.label}
        </div>;
    });
    return <div ref={divEl} className="w-48 relative">
        <Panel className="flex justify-between items-center cursor-pointer " onClick={handleClick}>
            {value?.label || 'Select...'}
            <GoChevronDown className="text-lg"/>
        </Panel>
        {isOpen && <Panel className="absolute top-full ">{renderedOptions}</Panel>}
    </div>;
}
export default Dropdown;