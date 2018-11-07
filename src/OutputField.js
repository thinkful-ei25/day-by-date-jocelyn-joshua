import React from 'react';

export default function Output(props){
  let date = new Date();
  date = date.toISOString().slice(0,10);
  let dateNum = parseInt(date.split('-').join(''));
  let valNum = parseInt(props.dateVal.split('-').join(''));
  if(valNum > dateNum){
    return(
      <h1>That day will be a {props.value}</h1>
    );
  }
  else if(valNum < dateNum){
    return(
      <h1>That day was a {props.value}</h1>
    );
  }
  else{
    return<h1>That day is {props.value} and it is today!</h1>
  }
}