import  Accordion from '../components/Accordion'
function AccordionPage(){
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
  return <Accordion items={items}/>
}

export default AccordionPage;