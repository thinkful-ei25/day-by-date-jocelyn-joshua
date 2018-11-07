export const yearCode = (input)=>{
  const YY = parseInt(input.slice(2,4)); 
  return ((YY+ Math.floor(YY/4))%7) 
}

export const monthCode = (input) =>{
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

export const centuryCode = (input) =>{
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

export const leapYear = (input) => {
  const leap = parseInt(input.slice(0,4));

  if (leap % 400 === 0){
    return 1
  } else if (leap % 4 === 0 && leap % 100 !== 0) {
    return 1
  } else 
  return 0 
};

export const calcDateVal = (date) => {
  const _yearCode = yearCode(date);
  const _monthCode = monthCode(date.slice(5,7));
  const _centuryCode = centuryCode(date);
  const _leapYear = leapYear(date); 
  const _dayCode = parseInt(date.slice(8,10)); 

  return ((_yearCode + _monthCode + _centuryCode + _dayCode - _leapYear)%7)
};

export const calcDay = (stateDate) => {
  const dayValue = calcDateVal(stateDate);
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
}