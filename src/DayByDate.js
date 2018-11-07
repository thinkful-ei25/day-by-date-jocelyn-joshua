import React from 'react'; 
import InputForm from './InputForm';
import OutputField from './OutputField';
import { yearCode, monthCode, centuryCode, leapYear } from './Calculations';

export default class DayByDate extends React.Component{
   constructor(props) {
     super(props); 
     this.state = {
       date : '2018-09-24'
     };
   }

   updateDate(input){
    console.log(input);
    this.setState({date: input});   
   }
  
   
   
   
   calcDateVal(date){
     const _yearCode = yearCode(date);
     const _monthCode = monthCode(date.slice(5,7));
     const _centuryCode = centuryCode(date);
     const _leapYear = leapYear(date); 
     const _dayCode = parseInt(date.slice(8,10)); 

     return ((_yearCode + _monthCode + _centuryCode + _dayCode - _leapYear)%7)
   };
   calcDay(){
    const dayValue = this.calcDateVal(this.state.date);
    console.log(dayValue); 
    switch(dayValue){
      case 0: 
        return 'Sunday';
      case 1: 
        return 'Monday'; 
      case 2: 
        return 'Tuesday'; 
      case 3: 
        return 'Wednesday';
      case 4: 
        return 'Thursday'; 
      case 5: 
        return 'Friday'; 
      default: 
        return 'Saturday';
    }
   };

   render(){
     return (
       <div className='day-by-date'> 
        <InputForm onSubmit={(input) => {
          this.updateDate(input);
          }
        }
          />
        <OutputField value={this.calcDay()}/>

       </div>
     )
   } 
   
}