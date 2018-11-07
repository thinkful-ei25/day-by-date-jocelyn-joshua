import React from 'react'; 
import InputForm from './InputForm';
import OutputField from './OutputField';
import { calcDay } from './Calculations';

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

   render(){
     return (
      <div className='day-by-date'> 
        <InputForm onSubmit={(input) => {
          this.updateDate(input);
          }
        }
          />
        <OutputField value={calcDay(this.state.date)} dateVal={this.state.date}/>
       </div>
     )
   } 
   
}