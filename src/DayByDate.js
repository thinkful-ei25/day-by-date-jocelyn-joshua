import React from 'react'; 
import InputForm from './InputForm';
import OutputField from './OutputField';

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
   yearCode(input){
     const YY = parseInt(input.slice(2,4)); 
     return ((YY+ Math.floor(YY/4))%7) 
   }
   monthCode(input){
     let returnMonth = 6; 
    
     switch(input){
       case '01':
       case '10':
        returnMonth = 0;
        break; 
       case '05':
        returnMonth = 1;
        break; 
       case '08':
        returnMonth = 2;
        break; 
       case '02':
       case '03':
       case '11':
        returnMonth = 3;
        break; 
       case '06':
        returnMonth = 4;
        break; 
       case '09':
       case '12':
        returnMonth = 5;
        break; 
       default:
        returnMonth = 6; 
     }
     return returnMonth
   }
   centuryCode(input){
     const YY = parseInt(input.slice(0,2)); 
     switch(YY){
       case 19:
       case 23: 
        return 0;
       case 22:
       case 18:
        return 2; 
       case 17:
       case 21: 
        return 4; 
       default:
        return 6; 
     }
   }
   leapYear(input){
     const leap = parseInt(input.slice(0,4));

     if (leap % 400 === 0){
       return 1
     } else if (leap % 4 === 0 && leap % 100 !== 0) {
       return 1
     } else 
     return 0 
   };
   calcDateVal(date){
     const yearCode = this.yearCode(date);
     const monthCode = this.monthCode(date.slice(5,7));
     const centuryCode = this.centuryCode(date);
     const leapYear = this.leapYear(date); 
     const dayCode = parseInt(date.slice(8,10)); 

     return ((yearCode + monthCode + centuryCode + dayCode - leapYear)%7)
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