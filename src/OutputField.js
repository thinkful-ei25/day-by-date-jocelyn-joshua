import React from 'react';

export default function Output(props){
  let date = new Date();
  date = date.toISOString().slice(0,10);
  let dateNum = parseInt(date.split('-').join(''));
  let valNum = parseInt(props.dateVal.split('-').join(''));
  if(valNum > dateNum){
    return(
      <div className='output-field'>
      <h1>{props.dateVal} will be a {props.value}</h1>
      </div>
    );
  }
  else if(valNum < dateNum){
    return(
      <div className='output-field'>
      <h1>{props.dateVal} was a {props.value}</h1>
      </div>
    );
  }
  else{
    return(
    <div className='output-field'>
      <h1>{props.dateVal} is {props.value} and it is today!</h1>
    </div>
    )
  }
}