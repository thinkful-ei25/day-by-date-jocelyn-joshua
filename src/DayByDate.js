import React from 'react'; 
import InputForm from './InputForm';
import OutputField from './OutputField';

export default class DayByDate extends React.Component{
   constructor(props) {
     super(props); 
     this.state = {
       year: '2018', 
       month:'07', 
       day:'05'
     };
   }

   updateDate(input){
    console.log(input);
    this.setState({year: input.slice(0,4), month: input.slice(5,7), day: input.slice(8,10) });   
   }

   render(){
     return (
       <div className='day-by-date'> 
        <InputForm onSubmit={(input) => {
          this.updateDate(input);
          }
        }
          />
        <OutputField/>
       </div>
     )
   } 
   
}