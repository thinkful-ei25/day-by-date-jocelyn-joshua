import React from 'react'; 

export default class DayByDate extends React.Component{
   constructor(props) {
     super(props); 
     this.state = {
       month:11, 
       day:7, 
       year:2018
     };
   }
   render(){
     return (
       <div class='day-by-date'> 
        <InputForm/>
        <OutputField/>
       </div>
     )
   } 
   
}